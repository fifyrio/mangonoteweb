-- 1. 处理现有的游客用户数据
-- 游客用户不需要与 auth.users 关联，只有 OAuth 用户才需要

-- 不添加外键约束，因为游客用户的 ID 不在 auth.users 中
-- 我们通过 is_guest 字段来区分游客和 OAuth 用户

-- 2. 创建触发器函数，当 OAuth 用户注册时自动在 users 表中创建记录
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- 检查是否已存在该用户（避免重复插入）
  IF NOT EXISTS (SELECT 1 FROM public.users WHERE id = NEW.id) THEN
    INSERT INTO public.users (id, email, full_name, avatar_url, is_guest)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
      NEW.raw_user_meta_data->>'avatar_url',
      false  -- OAuth 用户不是游客
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. 创建触发器
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. 创建更新触发器，当 auth.users 更新时同步到 users 表
CREATE OR REPLACE FUNCTION public.handle_user_update()
RETURNS TRIGGER AS $$
BEGIN
  -- 只更新非游客用户（OAuth 用户）
  UPDATE public.users SET
    email = NEW.email,
    full_name = COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', full_name),
    avatar_url = COALESCE(NEW.raw_user_meta_data->>'avatar_url', avatar_url),
    updated_at = now(),
    last_active_at = now()
  WHERE id = NEW.id AND is_guest = false;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. 创建更新触发器
DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
CREATE TRIGGER on_auth_user_updated
  AFTER UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_user_update();

-- 6. 添加行级安全策略 (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- OAuth 用户只能查看和更新自己的记录
CREATE POLICY "Authenticated users can view own record" ON public.users
  FOR SELECT USING (auth.uid() = id AND is_guest = false);

CREATE POLICY "Authenticated users can update own record" ON public.users
  FOR UPDATE USING (auth.uid() = id AND is_guest = false);

-- 游客用户的访问策略（根据需要调整）
CREATE POLICY "Guest users policy" ON public.users
  FOR ALL USING (is_guest = true);

-- 系统可以插入新用户记录（通过触发器）
CREATE POLICY "Enable insert for service role" ON public.users
  FOR INSERT WITH CHECK (true);

-- 7. 更新 updated_at 自动触发器
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_users_updated_at ON public.users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
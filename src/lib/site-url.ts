/**
 * Get the site URL for OAuth callbacks and redirects
 * Prioritizes environment variable, falls back to current origin
 */
export function getSiteUrl(): string {
  // In server-side rendering, we can't access window
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  }
  
  // Client-side: use env var or current origin
  return process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
}

/**
 * Get the OAuth callback URL for the current environment
 */
export function getOAuthCallbackUrl(next: string = '/'): string {
  const siteUrl = getSiteUrl();
  return `${siteUrl}/auth/callback?next=${encodeURIComponent(next)}`;
}
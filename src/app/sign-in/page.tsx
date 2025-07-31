import { Metadata } from 'next';
import SignInContent from './SignInContent';

export const metadata: Metadata = {
  title: 'Sign In - Mango AI Note',
  description: 'Sign in to your Mango AI Note account to access your personalized learning tools.',
};

export default function SignInPage() {
  return <SignInContent />;
}
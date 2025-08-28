'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuthStore } from './stores/authStore';

export default function Home() {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      console.log('Authenticated user detected, redirecting to admin:', user);
      router.push('/');
    } else {
      console.log('No authenticated user, redirecting to login');
      router.push('/login');
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#393F9D] mx-auto"></div>
        <p className="mt-4 text-[#393F9D] font-semibold">Loading...</p>
      </div>
    </div>
  );
}

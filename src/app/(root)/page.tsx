"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('/login');
    }, 100);

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

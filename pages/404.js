import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Run only in the browser
    if (typeof window === 'undefined') return;
    const host = window.location.hostname || '';
    const isLocalhost =
      host.includes('localhost') || host.startsWith('127.') || host === '::1';

    if (!isLocalhost) {
      // Replace so the 404 isn't kept in history
      router.replace('/');
    }
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300">You will be redirected shortly.</p>
      </div>
    </main>
  );
}

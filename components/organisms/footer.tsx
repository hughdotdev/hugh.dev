'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isNotHomePage = pathname !== '/';

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <footer className="max-w-2xl mx-auto px-4 py-6">
      {isNotHomePage && (
        <p className="mb-4 text-sm font-mono footer-text">
          <Link 
            href="/" 
            className="footer-link"
          >
            $ cd ~
          </Link>
          {' '}|{' '}
          <button 
            onClick={handleBack}
            className="footer-link"
          >
            $ cd ..
          </button>
        </p>
      )}
      <p className="text-sm footer-text">
        <a 
          href="https://mit-license.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          MIT License
        </a>
        {' '}|{' '}2025-PRESENT © Hugh Fabre
      </p>
    </footer>
  );
}


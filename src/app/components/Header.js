import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-white to-gray-200 fixed w-full top-0 z-50 shadow-md backdrop-blur-lg transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-3xl font-bold text-gray-800 tracking-wide hover:text-blue-400 transition-colors duration-300">
          LOGO
        </Link>
        <nav className="flex space-x-8">
          <Link href="/about" className="text-lg font-medium text-gray-600 hover:text-blue-400 transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-lg font-medium text-gray-600 hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

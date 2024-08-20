import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white to-gray-200 text-gray-600 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light mb-4">
          &copy; 2024 MyWebsite. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition-colors duration-300">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <FaLinkedin size={20} />
          </Link>
        </div>
        <div className="mt-4 space-x-4 text-gray-600 text-sm">
          <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-200 text-white p-4">
      <div className="flex items-center justify-between">

        <Link href="/">
            <h1 className="text-5xl font-bold text-yellow-500 hover:text-green-400">
              <strong>1Click Mall</strong>
            </h1>
        </Link>
        
        <div className="flex gap-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={35} color="blue" />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={35} color="blue" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35} color="blue" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} color="blue" />
          </a>
        </div>
      </div>

      <p className="text-2xl mt-2 text-blue-600">
        The online platform for convenient shopping
      </p>
    </header>
  );
};

export default Header;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-4">
      <p className="text-md justify-center gap-4 text-center">
        &copy; 2023 <strong> 1Click Mall.</strong> All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="white" />
        </a>
        
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="white" />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="white" />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="white" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;

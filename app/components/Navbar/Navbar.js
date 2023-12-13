
import React from 'react';
import Link from 'next/link';


const Navbar = ({showHome = false, showAbout = false, showShop = false, showProducts = false, showContact = false }) => {
  return (
    <nav className="mt-4 bg-blue-500 md:text-center">
        <ul className="flex space-x-4 gap-2 justify-center">
 
          {showHome && <Link href="/home" className="hover:text-white">HOME</Link>}
          {showAbout && <Link href="/about" className="hover:text-white">ABOUT</Link>}
          {showShop && <Link href="/shop" className="hover:text-white">SHOP</Link>}
          {showProducts && <Link href="/products" className="hover:text-white">PRODUCTS</Link>}
          {showContact && <Link href="/contacts" className="hover:text-white">CONTACT</Link>}
        </ul>
      </nav>
    );
    };
      
    
    


export default Navbar;

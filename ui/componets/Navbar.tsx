import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from  '@/assets/logo/logo.png'

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800">
      <nav className="flex justify-center items-center h-16">
      <div className="flex justify-start  items-start h-16">
        <Image src= {logo} width={100} height={100}  alt='logo'/>
      </div>
        <ul className="flex items-center text-white space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex   justify-end items-end text-white space-x-6 ml-auto">
          <li>
            <Link href="/sign-in">Sign in</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800">
      <nav className="flex justify-center items-center h-16">
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


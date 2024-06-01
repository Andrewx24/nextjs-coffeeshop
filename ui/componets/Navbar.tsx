import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='flex-between '>
        <ul className='flex items-center text-white'>
          <li className='mr-6'>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className='mr-6'>
            <Link href="/store">
              Store
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className='flex items-center text-white'>
          <li>
            <Link href="/sign-in">
              Sign in
            </Link>
          </li>
          <li>
            <Link href="/sign-up">
             Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

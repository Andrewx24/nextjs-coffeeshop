import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'> 
        <ul className='flex items-center text-white'>
          <li className='mr-6'>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className='mr-6'>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
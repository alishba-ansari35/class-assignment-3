import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black py-4'>
        <nav className='flex justify-between items-center py-4'>
            <div className='text-2xl text-white pl-3 font-serif'>Coffee Shop</div>
            <ul className='flex gap-5 font-serif pr-2'>
            <li><Link href="/" className='text-white text-xl  decoration-white '>Home
            </Link></li>
            <li><Link href="/about" className='text-white text-xl  decoration-white '>About
            </Link></li>
            <li><Link href="/contact" className='text-white text-xl  decoration-white '>Contact
            </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

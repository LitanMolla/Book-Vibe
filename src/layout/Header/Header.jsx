import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import { Link, NavLink } from 'react-router'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <header className='py-3 shadow mb-5'>
        <Container>
          <div className="flex items-center justify-between">
            <Link to={'/'} className='text-2xl font-semibold'>Book Vibe</Link>
            <ul className='md:flex gap-5 hidden'>
              <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500 px-3 py-2 border rounded-md' : ''}>Home</NavLink></li>
              <li><NavLink to={'/listed'} className={({ isActive }) => isActive ? 'text-green-500 px-3 py-2 border rounded-md' : ''}>Listed Books</NavLink></li>
              <li><NavLink to={'/pages-read'} className={({ isActive }) => isActive ? 'text-green-500 px-3 py-2 border rounded-md' : ''}>Pages to Read</NavLink></li>
            </ul>
            <div className="md:flex gap-3 hidden">
              <Link className='bg-green-500 text-gray-100 px-5 py-2 rounded-md cursor-pointer border duration-300 hover:bg-green-600'>Login</Link>
              <Link className='bg-cyan-500 text-gray-100 px-5 py-2 rounded-md cursor-pointer border duration-300 hover:bg-cyan-600'>Register</Link>
            </div>
            {/* bar btn */}
            <Link onClick={()=>setisOpen(prv=>!prv)} className='md:hidden'><Menu /></Link>
          </div>
          {
            isOpen
            &&
            <ul className='text-center mt-5 space-y-2 md:hidden'>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500' : ''}>Home</NavLink></li>
            <li><NavLink to={'/listed'} className={({ isActive }) => isActive ? 'text-green-500' : ''}>Listed Books</NavLink></li>
            <li><NavLink to={'/pages-read'} className={({ isActive }) => isActive ? 'text-green-500' : ''}>Pages to Read</NavLink></li>
          </ul>
          }
        </Container>
      </header>
    </>
  )
}

export default Header
import React from 'react'
import Container from '../../components/Container/Container'
import { Link, NavLink } from 'react-router'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className='py-3'>
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
            <Link className='md:hidden'><Menu /></Link>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header
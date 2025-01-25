import React from 'react'
import logo from '../movielogo.jpg'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center p-4 bg-black text-white'>
    <img className='w-[70px]' src={logo} alt='' />
    <Link to='/'>Home</Link>
    <Link to='/watchlist'>watchlist</Link>
    </div>
  )
}

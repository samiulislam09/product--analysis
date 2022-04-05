import React from 'react'
import CustomLink from '../CustomLink/CustomLink'
import './Header.css'

function Header() {
  return (
    <div className='menu-items'>
      <CustomLink className='menu-item' to='/'>Home</CustomLink>
      <CustomLink className='menu-item' to='/reviews'>Reviews</CustomLink>
      <CustomLink className='menu-item' to='/dashboard'>Dashboard</CustomLink>
      <CustomLink className='menu-item' to='/blogs'>Blogs</CustomLink>
      <CustomLink className='menu-item' to='/about'>About</CustomLink>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import '../components/styles.css'
import { Link } from 'react-router-dom'
import { HiSearch } from 'react-icons/hi';
import { FaWhatsappSquare,FaInstagramSquare,FaTwitterSquare, FaFacebookSquare, FaCaretDown } from 'react-icons/fa';




function Navbar() {
  const [dropdown, setDropdown] = useState(false)

  function handleDropMenu(){
    setDropdown(!dropdown)
  }

  return (
    <nav className='nav'>
      <div className='container'>
      <div className='nav-image'>
      <img alt='hhh'/>
      </div>
        <div className='blog-name'>
          <span className='blog-1 blog'> b</span>
          <span className='blog-2 blog'>l</span>
          <span className='blog-3 blog'>O</span>
          <span className='blog-4 blog'>g</span>
          <span className='blog-5 blog'>S</span>
          <span className='blog-6 blog'>i</span>
          <span className='blog-7 blog'>t</span>
          <span className='blog-8 blog'>e</span>

        </div>
        <div className='link-names'>
          <Link to="/" className="nav-link link-hover">Home</Link>
          <Link to="/about" className="nav-link link-hover">About</Link>
          <Link to="/contact" className="nav-link link-hover">Contact</Link>
          {/* <Link to="/services" className="nav-link">services</Link> */}
          <span className='link-hover' onClick={handleDropMenu}>Categories <FaCaretDown className='drop-icons' /></span>
          <span className='link-hover' >Services <FaCaretDown className='drop-icons' /></span>
          <span className='link-hover'>More <FaCaretDown className='drop-icons' /></span>
        </div>
        <div className='search-input'>
          <input />
          <HiSearch className='search-icon' />
        </div>
        <div className='user-auth'>
        <Link to="/login"> <button>Login</button></Link>
          <button>SignUp</button>
        </div>

      </div>

     {/* {dropdown &&
      <div className='first-droplist'>
      <ul>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        </ul>
      </div>} */}

      {/* <div className='first-droplist'>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
      </div> */}

      {/* <div className='first-droplist'>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
        <span>Tech</span>
      </div> */}

      
    </nav>
  )
}

export default Navbar
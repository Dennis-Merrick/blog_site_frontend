import React from 'react'
import '../components/styles.css'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare,FaInstagramSquare,FaTwitterSquare, FaFacebookSquare, FaCaretDown } from 'react-icons/fa';



function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
        <p className="bio">UserBio...</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebookSquare /></a>
          <a href="https://twitter.com"><FaTwitterSquare /></a>
          <a href="https://instagram.com"><FaInstagramSquare /></a>
          <a href="https://whatsapp.com"><FaWhatsappSquare /></a>
        </div>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li><Link to="">Tech</Link></li>
          <li><Link to="">Lifestyle</Link></li>
          <li><Link to="">Finance</Link></li>
          <li><Link to="">Travel</Link></li>
        </ul>
      </div>

      <div className="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
          <li><Link to="">Recent Post 1</Link></li>
          <li><Link to="">Recent Post 2</Link></li>
          <li><Link to="">Recent Post 3</Link></li>
        </ul>
      </div>

      <div className="newsletter-signup">
        <h3>Newsletter</h3>
        <form className='sidebar-forms'>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>

  )
}

export default Sidebar
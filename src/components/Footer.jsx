import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
const Footer = () => {

    const navigate = useNavigate();
  
    const handleClick = () =>{
    navigate('/shop/create');
    }
  return (
    <div className='sticky-top'>
        
      <nav className="navbar bg-primary nav-footer " data-bs-theme="dark">
        <button onClick={handleClick} className="btn btn-light btn-lg footer-button ">Create New</button>
      </nav>
       
    </div>
  );
}

export default Footer;
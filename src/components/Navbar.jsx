import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
    <div className="container">
      
      <Link to="/" className="navbar-brand">Team System Shop</Link>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link navbar-brand ">Home</Link>
          </li>
          <li className="nav-item ">
            <Link to="/shop/manager" className="nav-link navbar-brand">Manager</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop/products" className="nav-link navbar-brand">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop/cart" className="nav-link navbar-brand">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
  const navigate = useNavigate();
  
  const handleClick = () =>{
    navigate('/shop/products');
}
  return (
    
        <div className="container">
            <h1 className='home-h1'>Welcome to Sabian's bookstore!</h1>
            <button onClick={handleClick} type="button" className="home-button btn btn-primary btn-lg">START SHOPPING</button>
        </div> 
  );
}


export default Home;
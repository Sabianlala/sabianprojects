import React from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

const Products = ({ list ,setCartItems , cartItems }) => {

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className="text-center" style={{backgroundColor: 'aqua', marginTop: '20px' , borderRadius: '10px'}}>Products</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {list.map(product => (
            <div className="col" key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                addToCart={() => handleAddToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

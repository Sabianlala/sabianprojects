import React from 'react';

const ProductCard = ({ image, title, price , addToCart   }) => {

  

  return (
    <div className="card" style={{backgroundColor: 'burlywood'}}>
      <img src={image} className="card-img-top" alt={title} width="180px" height="370px" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <button  onClick={addToCart} className="btn btn-primary btn-lg btn-block">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

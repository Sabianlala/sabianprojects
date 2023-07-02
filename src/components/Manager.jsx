import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Manager = (props) => {
  const navigate = useNavigate();
  
const {list,setList, cartItems, setCartItems} = props;
  const handleEdit = (id) => {
    navigate(`/shop/edit/${id}`);
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((product) => product.id !== id);
    const updatedCartItems = cartItems.filter((item) => item.id !== id);

    setList(updatedList);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {list.map((item) => (
          <div className="col-md-2" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} width={"150px"} height={"400px"} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <div className="d-flex justify-content-center">
                  <button onClick={() => handleEdit(item.id)} className="btn btn-primary btn-lg me-5">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-lg">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Manager;

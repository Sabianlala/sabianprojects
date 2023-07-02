import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = ({ list, setList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: 0
  });

  useEffect(() => {
    if (list) {
      const selectedProduct = list.find((product) => product.id === Number(id));
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [list, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = list.map((item) => {
      if (item.id === Number(id)) {
        return product;
      }
      return item;
    });
    setList(updatedList);
    navigate('/shop/manager');
  };


  return (
    <div className="container border border-primary mt-5 mb-2">
    <h1>Edit Product</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
      </div>
      <div className="form-group ">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>
      <div class="d-flex justify-content-center mt-2 mb-2">
      <button type="submit" className="btn btn-primary">
        Update Product
      </button>
      </div>
    </form>
  </div>
  );
};

export default Edit;

 
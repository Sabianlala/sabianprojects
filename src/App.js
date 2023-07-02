import React from 'react';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Manager from './components/Manager';
import Cart from './components/Cart';
import Create from './components/Create';
import Edit from './components/Edit';


const App = () => {

  
  const products = [
    {
      id: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._AC_SX184_.jpg',
      title: '1984',
      price: 10
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71yuXjWGHdL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Animal Farm',
      price: 7
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/71Au8SjrwkL._AC_UY327_QL65_.jpg',
      title: 'The old Man and the Sea',
      price: 5
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/61RC5HL75bL._AC_UY327_QL65_.jpg',
      title: 'The Call of the Wild',
      price: 7
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/91GCiQcWVWL._AC_UY327_QL65_.jpg',
      title: 'Robinson Crusoe',
      price: 10
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/61Bs7ZYJ+ML._AC_UY327_QL65_.jpg',
      title: 'Anna Karenina',
      price: 12
    },
    {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/91VmjCxYomL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Lost Illusions',
      price: 14
    },
    {
      id: 8,
      image: 'https://m.media-amazon.com/images/I/41tv1-PnTnL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Martin Iden',
      price: 9
    },
    {
      id: 9,
      image: 'https://m.media-amazon.com/images/I/81B9LhCS2AL._AC_UY327_QL65_.jpg',
      title: 'And then there were none',
      price: 8
    },
    {
      id: 10,
      image: 'https://m.media-amazon.com/images/I/81fPBabRvAL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Arch of Triumph',
      price: 10
    },
    {
      id: 11,
      image: 'https://m.media-amazon.com/images/I/61opvvBQjnL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Faust',
      price: 20
    },
    {
      id: 12,
      image: 'https://m.media-amazon.com/images/I/613V1UnYoYL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'The Metamorphosis',
      price: 7
    },
    {
      id: 13,
      image: 'https://m.media-amazon.com/images/I/810YcRfNQzL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'All quiet on the Western front',
      price: 7
    },
    {
      id: 14,
      image: 'https://m.media-amazon.com/images/I/71ab81fFqsL._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Norwegian wood',
      price: 14
    },
    {
      id: 15,
      image: 'https://m.media-amazon.com/images/I/715q28o7R4L._AC_UY327_FMwebp_QL65_.jpg',
      title: 'Demons',
      price: 15
    }
  ];

  const [cartItems, setCartItems] = useState([]);
  const [balance, setBalance] = useState(0);
  const [list, setList] = useState(products);


  
  
  return (
    
  <Router>
    <div>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/shop/manager" element={<Manager list={list} setList={setList} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/shop/products" element={<Products list={list} setCartItems={setCartItems} cartItems={cartItems} />} />        
        <Route path="/shop/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} balance={balance} />} />
        <Route path="/shop/create" element={<Create  list={list} setList={setList}/>}/>
        <Route path="/shop/edit/:id" element={<Edit list={list} setList={setList}/>}/>
    </Routes>
   </div>
  </Router> 
  );
};

export default App;


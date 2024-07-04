import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Product from './Product';
import './Productinput.css';

function ProductInput() {
  const [state, setState] = useState({
    id: v4(),
    title: "",
    price: "",
    des: "",
    img: ""
  });

  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, state]);
    setState({
      id: v4(),
      title: "",
      price: "",
      des: "",
      img: ""
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handleDelete = (id) => {
    let d = arr.filter(el => el.id !== id);
    setArr(d);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title' />
        <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description' />
        <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price' />
        <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL' />
        <input type="submit" />
      </form>
      <Product arr={arr} handleDelete={handleDelete} />
    </div>
  );
}

export default ProductInput;

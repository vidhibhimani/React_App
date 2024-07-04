import React from 'react';
import './Product.css';

function Product({ arr, handleDelete }) {
  return (
    <div className="product-list">
      {arr.map((el) => (
        <div key={el.id} className="product-item">
          <div>
            <img src={el.img} alt={el.title} className='img'/>
          </div>
          <div className="product-info">
            <h1>{el.title} - {el.des}</h1>
           
          </div>
          <div>
            <h3>{el.price}</h3>
          </div>
          <div className="product-actions">
              <button className="edit">EDIT</button>
              <button className="delete" onClick={() => handleDelete(el.id)}>DELETE</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

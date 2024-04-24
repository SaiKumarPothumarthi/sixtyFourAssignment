
import React from 'react';
import './index.css'

export default function Modal({ onClose, items }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className='postion-end'>
        <button className="close-btn" onClick={onClose}>Close</button>
        </div>
        <h2>All Items</h2>
        <div className="items-container">
          {items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.imgUrl} alt={item.heading} />
              <h3>{item.heading}</h3>
              <p>{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

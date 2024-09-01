// Card.js
import React from 'react';
import './Card.css';

const Card = ({imagecard, title, content }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={imagecard} alt="" className='cardlogo' />
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
}

export default Card;

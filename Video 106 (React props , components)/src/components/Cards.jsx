import React from 'react';
import './Cards.css';
const Cards = (props) => {  //here we write props because we gave prop from app.jsx file
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      {/* here we receive the prop that we gave from app.jsx file and we can use that prop to customize the content of the card component */}
      <p>{props.description}</p>
    </div>
  );
};

export default Cards;

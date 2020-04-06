import React from 'react';
  
const QuoteSimpson = ({ quote, character, image })  => (
    <div>
        <p><strong>{quote}</strong></p>
        <p>{character}</p>
        <img 
        src={image}
        alt={character}
        /> 
    </div>
        
  );


export default QuoteSimpson;


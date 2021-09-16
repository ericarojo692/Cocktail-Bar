import React from "react";


function CocktailContainer({ cocktails })  {
    return (
        // <div></div>
        <li className="card">
          <img src={cocktails.image} alt={cocktails.name} />
          <h4>{cocktails.name}</h4>
          <p>Price: {cocktails.price}</p>
          {true ? (
            <button className="primary">In Stock</button>
          ) : (
            <button>Out of Stock</button>
          )}
        </li>
      );
    }
    

export default CocktailContainer;

import React from "react";


function Menu({ cocktails }) {
   
  const cocktailItems = cocktails.map((cocktail)=>(
    <div key={cocktail.id}>
        <h2>{cocktail.name}</h2>
        <img src={cocktail.image} width="300" height="300"/>
        <h3>${cocktail.price}</h3>
    </div>
  ))
  
  return (
  <div>
    <h1>Menu</h1>
    {cocktailItems}
  </div>
  );
}

export default Menu;

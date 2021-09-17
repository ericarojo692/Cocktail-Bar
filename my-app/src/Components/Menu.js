import React from "react";
import { useState} from "react"


function Menu({ cocktails, handleDeleteCocktail }) {

  const [CocktailSearch, setCocktailSearch] = useState("")
    const onChange = (e) => {
      setCocktailSearch(e.target.value)
    }
    const CocktailsToDisplay = cocktails.filter(cocktail=> {
      if (CocktailSearch === "") {
        return true
      } else {
        return cocktail.name.toLowerCase().includes(CocktailSearch.toLowerCase())
      }}) 

   
  const cocktailItems = CocktailsToDisplay.map((cocktail)=>(
    <div key={cocktail.id}>
        <h2>{cocktail.name}</h2>
        <img src={cocktail.image} width="300" height="300"/>
        <h3>${cocktail.price}</h3>
        <button className="deletebttn" onClick={handleDeleteCocktail} id={cocktail.id}>Delete</button> 
        
    </div>
  ))
  
  return (
  <div>
    <form onChange={onChange}>
    <input type="text" name="Search" className="something" placeholder="Search..." /></form>
    <h1>Menu</h1>
    {cocktailItems}
    
  </div>
  );
}

export default Menu;

import React, { useEffect, useState } from "react";

import './App.css';


function App() {

  const [cocktails, setCocktails] = useState([])


  useEffect(() => {
      fetch("www.thecocktaildb.com/api/json")
      .then(res => res.json())
      .then(cocktailData => setCocktails(cocktailData))

      console.log(cocktailData)


  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;

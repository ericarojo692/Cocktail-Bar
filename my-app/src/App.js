import './App.css';
import  NavBar  from "./Components/NavBar"
import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Login } from "./Components/Login"
import { Menu } from "./Components/Menu"
import { useState, useEffect } from "react"
import CocktailList from './Components/CocktailList'
import CocktailContainer from "./Components/CocktailContainer"



function App() {

  const [cocktails, setCocktails] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(res => res.json())
    .then(drinksData => setCocktails(drinksData))
   
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path="/" components={Home}/>
      <Route exact path="/Menu" components={Menu}/>
      <Route exact path="/Login" components={Login}/>
      </BrowserRouter>
      <CocktailContainer cocktails={cocktails}/>
      <CocktailList cocktails={cocktails}/>
    </div>
  );
}

export default App;
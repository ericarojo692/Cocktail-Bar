import './App.css';
import  NavBar  from "./Components/NavBar"
import { Route, Switch } from "react-router-dom"
import  Home  from "./Components/Home"
import { Login } from "./Components/Login"
import  Menu  from "./Components/Menu"
import { useState, useEffect } from "react"
import CocktailList from './Components/CocktailList'
import CocktailContainer from "./Components/CocktailContainer"



function App() {

  const [cocktails, setCocktails] = useState([])


  const renderNewCocktail = (newCocktail) => {
        console.log(newCocktail)
        setCocktails([...cocktails, newCocktail])
  }
  
  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(res => res.json())
    .then(drinksData => setCocktails(drinksData))
   
  }, [])

  return (
    <div className="App">
     <NavBar />
      <Switch>
        <Route path="/Login">
        <Login />
        </Route>
        <Route path="/Menu">
        <Menu cocktails={cocktails}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
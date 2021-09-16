import './App.css';
import  NavBar  from "./Components/NavBar"
import { Route, Switch } from "react-router-dom"
import  Home  from "./Components/Home"
import { Login } from "./Components/Login"
import  Menu  from "./Components/Menu"
import { useState, useEffect } from "react"
import CocktailList from './Components/CocktailList'
import Search from "./Components/Search";
import AddCocktailForm from "./Components/AddCocktailForm"


function App() {

  const [cocktails, setCocktails] = useState([])
  
  const renderNewCocktail = (newCocktail) => {
        setCocktails([...cocktails, newCocktail])
  }
  

const [isDeleted, setDeleted] = useState(false)



  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(res => res.json())
    .then(drinksData => setCocktails(drinksData))
   
  }, [isDeleted])

  function handleDeleteCocktail(e) {
    fetch(`http://localhost:3000/cocktails/${e.target.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((cocktail) => {
        setDeleted(!isDeleted)
      });
  }

  return (
    <div className="App">
     <NavBar />
      <Switch>
        <Route path="/Login">
        <Login />
        </Route>
        <Route path="/Menu">
        <Menu 
        cocktails={cocktails} 
       
        handleDeleteCocktail = {handleDeleteCocktail}/>
        <AddCocktailForm renderNewCocktail={renderNewCocktail}/>
        
        <CocktailList />
       
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
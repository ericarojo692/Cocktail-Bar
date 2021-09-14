import './App.css';
import NavBar from "./Components/NavBar"
import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Login } from "./Components/Login"
import { Menu } from "./Components/Menu"
import { useState, useEffect } from "react"



function App() {

  const [cocktails, setCocktails] = useState([])


  useEffect(() => {
      fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(cocktailData => setCocktails(cocktailData))

     


  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path="/" components={Home}/>
      <Route exact path="/Menu" components={Menu}/>
      <Route exact path="/Login" components={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;




// // import React from "react";
// import { Route, Switch } from "react-router-dom";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import Actors from "./Actors";
// import Directors from "./Directors";
// import Movies from "./Movies";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path="/movies">
//           <Movies />
//         </Route>
//         <Route path="/directors">
//           <Directors />
//         </Route>
//         <Route path="/actors">
//           <Actors />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   );
// }


// export default App;


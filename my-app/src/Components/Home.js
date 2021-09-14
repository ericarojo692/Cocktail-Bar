import React from "react"
import { useHistory } from "react-router-dom"

export  const Home = () => {
let history = useHistory()

    return (
            <div className="home-container">
                <h2>
                    Home Page that will contain Cocktail information 
                </h2>
                <h3 onclick={() => history.push("/cocktail")}> Click here for cocktail</h3>
            </div>





    )
}
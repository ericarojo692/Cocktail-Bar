import React from "react"
import { useHistory } from "react-router-dom"

export  const Menu = () => {
let history = useHistory()

    return (
            <div className="Menu-container">
                <h2>
                    Will hold all cocktails 
                </h2>
                <h3 onclick={() => history.push("/menu")}> Click here for cocktail</h3>
            </div>





    )
}
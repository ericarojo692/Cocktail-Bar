import React from "react"
import { useHistory } from "react-router-dom"

export  const Login = () => {
let history = useHistory()

    return (
            <div className="Login-container">
                <h2>
                   Will allow users to login
                </h2>
                <h3 onclick={() => history.push("/Login")}> Click here to login</h3>
            </div>





    )
}
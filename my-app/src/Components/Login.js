import React from "react"
import { useHistory } from "react-router-dom"

export  const Login = () => {
let history = useHistory()

    return (
            <div className="Login-container">
                <h2>
                   Welcome to the Login Page! 
                </h2>
                <div className="Login-writing">
                <h3>Please log in. If you have any issues please notify the manager.</h3>
                </div>
                <h4 onclick={() => history.push("/Login")}> Click here to login</h4>
        <form>
        <div>
          <input  type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input className="button-color"type="submit" value="Submit" />
       
      </form>
            </div>

    )
}
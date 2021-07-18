import React from "react";


const Login =() =>{
    return (
        <form  >
          <input type= "text" placeholder= "Email"/>
          <br></br>
          <input type= "password" placeholder="Password"/>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      );
  };
export default Login;
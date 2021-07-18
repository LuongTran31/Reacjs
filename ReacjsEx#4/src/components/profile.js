import React from "react";


const Profile =() =>{
    return (
        <form  >
          <input type= "text" placeholder= "Email"/>
          <br></br>
          <input type= "password" placeholder="Password"/>
          <div>
            <button type="submit">Enter</button>
          </div>
        </form>
      );
  };
export default Profile;
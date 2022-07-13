import React, { Component } from 'react';
import {useState, useEffect} from "react"
import { withLDConsumer,useLDClient, withLDProvider, useFlags,asyncWithLDProvider } from 'launchdarkly-react-client-sdk';


const Form = () => {
  const ldClient = useLDClient();

  const [userData, setUserData] = useState({
      name: "",
      userName: "",
      email: ""
  });

  const handleSubmit = event => {
      console.log(userData);
      event.preventDefault();
      event.target.reset();
      ldClient.identify({ 
          key: userData.userName,
          name: userData.name,
          email: userData.email
        });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Login</h3>
        </div>

        <div>
          <input
            name="name"
            placeholder="Name"
            onChange={(event) => 
                setUserData({...userData, name: event.target.value})}
          />
        </div>

        <div>
          <input
            name="userName"
            placeholder="User Name"
            onChange={(event) => 
                setUserData({...userData, userName: event.target.value})}
          />      
        </div>


        <div>
          <input
            name="email"
            placeholder="Email"
            onChange={(event) => 
                setUserData({...userData, email: event.target.value})}
          />     
        </div>

        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}



export default Form;

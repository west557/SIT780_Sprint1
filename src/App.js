import React, { useState } from 'react';
import LoginForm from "./Components/LoginForm"
import HomePage from './Components/HomePage';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const scottUser = {
    name: "Scott West",
    email: "west55721@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else if (details.email == scottUser.email && scottUser.password == scottUser.password) {
      console.log("Hello Scott - you are logged in")
      setUser({
        name: details.name,
        email: details.email
      })
    }

    else {
      console.log("Details do not match");
      setError(<h3>Login not successful.<br></br>Details do not match!</h3>)

    }
  }

  const Logout = () => {
    console.log("Logout");
    console.log("You have been logged out successfully")
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
     <HomePage />  

    </div> 
  );
}

export default App;

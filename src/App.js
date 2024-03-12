import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; 
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { SendMoney } from "./pages/SendMoney";
import { AddMoney } from "./pages/AddMoney";
import { Feedback } from "./pages/Feedback";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>

      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element = {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }/>
        <Route path="/sendMoney" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <SendMoney/>
          </PrivateRoute>
        } />
        <Route path="/addMoney" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <AddMoney/>
          </PrivateRoute>
        } />
        <Route path="/feedback" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Feedback/>
          </PrivateRoute>
        } />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/about" element = {<About/>} />
      </Routes>

    </div>
  );
}

export default App;

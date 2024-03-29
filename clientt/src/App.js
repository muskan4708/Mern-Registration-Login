import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import "./index.css";
import Protected from "./pages/Protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [token, setToken] = useState();
  // Function to handle user login
  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="/login"
          element={
            
              <Login />
          }
        />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

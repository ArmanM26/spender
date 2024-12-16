import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Spender from "./components/Spender"; // Spender page after login
import PrivateRoute from "./components/PeivateRoute";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protect Spender route with PrivateRoute */}
        <Route
          path="/spender"
          element={
            <PrivateRoute>
              <Spender />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

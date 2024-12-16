import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Spender from "./components/Spender"; // Spender page after login
// import PrivateRoute from "./routes/PrivateRoute"; // Protect Spender route
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <PrivateRoute path="/spender" element={<Spender />} />{" "} */}
        {/* Protected route */}
      </Routes>
    </Router>
  );
};

export default App;

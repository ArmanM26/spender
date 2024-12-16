import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Spender from "./components/Spender";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("isAuthenticated", "true");
      } else {
        localStorage.removeItem("isAuthenticated");
      }
    });

    return () => unsubscribe();
  }, []);

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated || user ? <Navigate to="/spender" /> : <Login />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/spender"
          element={isAuthenticated || user ? <Spender /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

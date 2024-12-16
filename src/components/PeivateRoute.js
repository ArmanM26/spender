import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./Firebase";

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser; // Check if the user is authenticated

  if (!user) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the children (Spender page)
  return children;
};

export default PrivateRoute;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./Spender.css";

const Spender = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage if available
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  // Update expenses in localStorage whenever the expenses state changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/"); // Redirect to login
  };

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="spender-container">
      <h2>Welcome to Spender</h2>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      {/* <button className="logout-btn" onClick={handleLogout}>Log out</button> */}
    </div>
  );
};

export default Spender;

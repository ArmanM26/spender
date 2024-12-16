import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalSpending from "./TotalSpending";
import "./Spender.css";

const Spender = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="spender-container">
      <h2>Welcome to Spender</h2>
      <p>You are logged in and ready to manage your expenses!</p>

      {/* Expense Form */}
      <ExpenseForm onAddExpense={addExpenseHandler} />

      {/* Expense List */}
      <ExpenseList expenses={expenses} />

      {/* Total Spending */}
      <TotalSpending expenses={expenses} />
    </div>
  );
};

export default Spender;

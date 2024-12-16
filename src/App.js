import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalSpending from "./components/TotalSpending";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="app-container">
      <h1>Spender</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <TotalSpending expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;

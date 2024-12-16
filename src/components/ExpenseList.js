import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet!</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.description}</span>
              <span>${expense.amount.toFixed(2)}</span>
              <span>{expense.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;

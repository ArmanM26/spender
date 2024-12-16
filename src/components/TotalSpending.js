import React from "react";

const TotalSpending = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="total-spending">
      <h2>Total Spending</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
};

export default TotalSpending;

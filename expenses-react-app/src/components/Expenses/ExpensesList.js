import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpenseList = ({ displayedExpenses }) => {
  if (displayedExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {displayedExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
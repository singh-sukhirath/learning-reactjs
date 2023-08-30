import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {expenseSaveHandler}/>
    </div>
  );
};

export default NewExpense;

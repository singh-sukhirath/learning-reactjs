import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      title: enteredExpenseData.title,
      amount: enteredExpenseData.amount,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelExpenseHandler = () => {
    setExpenseFormVisible(false);
  }

  const addExpenseHandler = () => {
    setExpenseFormVisible(true);
  };

  let addExpenseContent = (
    <div className="new-add-expense__actions">
      <button onClick={addExpenseHandler}>Add New Expense</button>
    </div>
  );

  if(expenseFormVisible){
    addExpenseContent = <ExpenseForm onSaveExpenseData={expenseSaveHandler} onCancelExpenseData={cancelExpenseHandler} />
  }

  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={expenseSaveHandler} /> */}
      {addExpenseContent}
    </div>
  );
};

export default NewExpense;

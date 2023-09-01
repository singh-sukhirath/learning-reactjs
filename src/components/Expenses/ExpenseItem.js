import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Cards/Card";

// import { useState } from "react";

const ExpenseItem = (props) => {
  //useState() is one of the React Hook

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

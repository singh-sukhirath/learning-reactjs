import { useState } from "react";
import Card from "../Cards/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (yearData) => {
    setSelectedYear(yearData);
  };

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChanger={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
};

export default Expenses;

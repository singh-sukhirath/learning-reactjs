import { useState } from "react";
import Expenses from "./components/Expenses/ExpensesComponent";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 8, 20),
    id:'1'
  },
  {
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 4, 28),
    id:'2'
  },
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 3, 18),
    id:'3'
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = (expense) => {
      console.log(expense);
      setExpenses((prevExpense) => {   
        return [expense, ...prevExpense];
      });

      console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
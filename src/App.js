import Expenses from "./components/Expenses/ExpensesComponent";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 8, 20),
    },
    {
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 4, 28),
    },
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 3, 18),
    },
    {
      title: "New Desk (Wooden)",
      amount: 194.12,
      date: new Date(2023, 3, 1),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
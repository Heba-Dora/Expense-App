import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";

function App() {
  const expenses = [
    {
      id:0,
      title: 'Book',
      amount: 20,
      date: new Date(2020, 2, 29),
    },
    {
      id:0,
      title: 'Iphone',
      amount: 25,
      date: new Date(2021, 2, 21),
    },
  {
    id:0,
    title: 'Laptop',
    amount: 30,
    date: new Date(2022, 4, 10),
  },
  ]
  return (
    <div className="App">
      <ExpenseForm/>
      <ExpenseItem
     date={expenses[0].date}
     title={expenses[0].title}
     amount={expenses[0].amount}
     />
        <ExpenseItem
     date={expenses[1].date}
     title={expenses[1].title}
     amount={expenses[1].amount}
     />
        <ExpenseItem
     date={expenses[2].date}
     title={expenses[2].title}
     amount={expenses[2].amount}
     />
    </div>
  );
}

export default App;

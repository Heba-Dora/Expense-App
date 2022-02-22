import React,{useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from './ExpenseForm';
import ExpenseFilter from "./ExpenseFilter";


const expenses_list = [
  {
    id:0,
    title: 'Book',
    amount: 20,
    date: new Date(2020, 2, 29),
  },
  {
    id:1,
    title: 'Iphone',
    amount: 25,
    date: new Date(2021, 2, 21),
  },
{
  id:2,
  title: 'Laptop',
  amount: 30,
  date: new Date(2022, 4, 10),
},
]
function App() {
 const [itemList, setItemList]=useState(expenses_list)


 const addExpenseHandler = (expense)=>{
   setItemList((prevExpenses)=>{
     return([...prevExpenses, expense])
   })
 }
  return (
    <div className="app">
      <ExpenseForm onSaveExpenseData={addExpenseHandler}/>
      <ExpenseFilter/>
    { itemList.map((expense)=>(<ExpenseItem
      key = {expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
     />)) }
      
    </div>
  );
}

export default App;

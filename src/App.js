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
 const [filtered, setFiltered] = useState('')
 const [addNew, setAddNew]= useState('')

 const filterHandler = (selectedYear) =>{
   setFiltered(selectedYear)

 }
 const filterExpense = itemList.filter(expense => {
   return expense.date.getFullYear().toString() === filtered
 })


 const addExpenseHandler = (expense)=>{
   setItemList((prevExpenses)=>{
     return([...prevExpenses, expense])
   })
 }

 const addNewHandler = ()=>{
   setAddNew(true)
 }


  return (
    <div className="app">
      <div>
      {!addNew && <button onClick={addNewHandler}>Add New Expenses</button>}
      {addNew && <ExpenseForm onSaveExpenseData={addExpenseHandler}/>}
      </div>
      <ExpenseFilter selected={filtered} 
      onChangeFilter={filterHandler} />
    { filterExpense.map((expense)=>(<ExpenseItem
      key = {expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
     />)) }
      
    </div>
  );
}

export default App;

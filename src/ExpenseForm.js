import React,{useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [title, setTitle]= useState('')
    const [amount, setAmount]= useState('')
    const [date, setDate]= useState('')
    const [itemList, setItemList]=useState([])
   


    const titleHandler = (event)=>{
        setTitle(event.target.value)
    }

    const amountHandler = (event)=>{
        setAmount(event.target.value)
    }

    const dateHandler = (event)=>{
        setDate(event.target.value)
    }

   const submitHandler=(event)=>{
    event.preventDefault()
    const expenseData = {
        id: Date.now(),
        title: title,
        amount: amount,
        date: new Date(date),
      };
  
      props.onSaveExpenseData(expenseData);
      setTitle('');
      setAmount('');
      setDate('');
    };
   
   
    // const submitHandler = (event) =>{{}
    //     event.preventDefault()
    //     setItemList([...itemList, {title: title,
    //         amount: amount,
    //         date: new Date (date),}])
        
    //     setTitle('')
    //     setAmount('')
    //     setDate('')
    // }
  return (
      <form onSubmit={submitHandler}>
    <div className='form' >
        <div className='formBox'>
            <label >Title</label>
            <input type="text" value={title}
            onChange={titleHandler} />
        </div>
        <div className='formBox'>
            <label >Amount</label>
            <input type="number" value={amount}
            min='0.01' step='0.01' onChange={amountHandler} />
        </div>
        <div className='formBox'>
            <label >Date</label>
            <input type="date" value={date}
            onChange={dateHandler} min='01,01,2019' max='31,12,2022'/>
        </div>
        <button type='submit'>Add Expenses</button>
    </div>
    </form>
  )
}

export default ExpenseForm
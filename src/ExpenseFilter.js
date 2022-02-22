import React,{useState} from 'react'
import './ExpenseFilter.css'

function ExpenseFilter() {
    const [filtered, setFiltered]=useState('')

    const filterHandler = (event)=>{
        setFiltered.filter(()=> event.target.value)
    }
    
  return (
    <div className='filter'>
        <h2>Filter by year</h2>
        <select onSelect={filterHandler}> 
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        </select>

    </div>
  )
}

export default ExpenseFilter
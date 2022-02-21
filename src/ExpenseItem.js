import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  return (
    <div className='expenses'>
        <ExpenseDate date={props.date}/>
        <div className='description'>
            <h2>{props.title}</h2>
            <div className='price'>{props.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem
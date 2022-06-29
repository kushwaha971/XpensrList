import React from 'react'
import AddForm from '../../components/add_form';
import Topfold from '../../components/topfold'
import './add_expense.css';
const AddExpense = () => {
  return (
    <>
      <div className='add_expense'>
       <Topfold/>
       <AddForm/>
      </div>
    </>
  )
}

export default AddExpense
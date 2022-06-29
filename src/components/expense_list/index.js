import React from 'react';
import './expense_list.css';
import Card from './card';
import { useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  
  const {expenseList: list, query} = useSelector((state)=> state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query))
  const notifySuccess = ()=> toast.success("Expense Deleted")
  return (
   <>
      <div className='exepense_list'>
      <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        {filteredList.length ? (
          filteredList.map((item) => <Card item={item} notifySuccess = {notifySuccess} />)

        ):
        (
          <div className='empty_state'>
            <img src={require("../../assets/images/empty.png")} alt="Empty List" className='empty_images' />
            <label>Your expense list is empty</label>
          </div>
        )}
      </div>
   </>
  )
}

export default ExpenseList
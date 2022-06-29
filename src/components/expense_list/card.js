import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import './card.css';
import {deleteExpense} from '../../redux/actions/expenses';

const Card = ({item,notifySuccess}) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () =>
  {
    dispatch(deleteExpense(item))
    notifySuccess();
  }
  return (
    <>
      <div className='card' 
      style={{borderRight: `6px solid ${item.category.color}`}}
      >
      <div className='image_container'>
        <img src={item.category.icon} 
        alt={item.category.title} className='card_image'
         />
      </div>
      <div className='card_info'>
        <label className='card_title'>{item.title}</label>
        <label className ='card_time'>{time}</label>
      </div>
      <div className='card_right'>
      <div>
        <label className='card_amount'>₹ {item.amount}</label>
      </div>
      <div className='delete_icon' onClick={handleDelete}>
        <i className ='fi-rr-trash'></i>
      </div>
      </div>
      </div>
    </>
  )
}

export default Card
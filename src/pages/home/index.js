import React from 'react';
import ExpenseList from '../../components/expense_list';
import Topfold from '../../components/topfold';
import './home.css';

export const Home = () => {
  return (
    <>
     <div className='home'>
      <Topfold/>
      <ExpenseList/>
     </div>
    </>
  )
}

export default Home;
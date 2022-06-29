import React, { useState } from 'react'
import { searchExpense } from '../../redux/actions/expenses';

import './topfold.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const handleQuery = (event) =>{
        setQuery(event.target.value);
        dispatch(searchExpense(event.target.value))
    }
  return (
   <>
     <div className='topfold'>
      {window.location.pathname ==='/' ? (
        <div className='home_topfold'>
            <div className='searchbar'>
             <i className="fi fi-rr-search"></i> 
             <input type="text" value={query}
             placeholder='Search for expenses' onChange={(event) => handleQuery(event)} />
           </div>

        <Link to = '/add_expense'>
          <div className='add_button'>
             <i className="fi fi-rr-add"></i>
             <label >Add</label>
          </div>
        </Link> 
        </div>
      ):
        <div className='add_topfold'>
          <Link to ='/'>
            <div className='add_topfold_button'>
              <i className= "fi-rr-angle-left"></i>
              <label >Back</label>
            </div>
          </Link>
          
          <Link to ='/'>
            <div className='add_topfold_button'>
              <i className= "fi-rr-cross-circle"></i>
              <label >Cancel</label>
            </div>
          </Link>
          
        </div>
         }
     </div>
   </>
  )
}

export default Topfold
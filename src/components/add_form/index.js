import React, { useState  } from 'react';
import {  useDispatch } from 'react-redux'
import { categories } from '../../constants/add_expense';
import { addExpense } from '../../redux/actions/expenses';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from './SuccessModal';
import "./add_form.css";


const AddForm = () => {
   const cat = categories;
   const [categoryOpen, setCategoryOpen] = useState(false); 
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [category,setCategory] = useState();
    const [modalOpen,setModalOpen] = useState(false);
    
  const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleAmount = (e) =>{
        const val = parseFloat(e.target.value);
        if(isNaN(val))  {
            setAmount("");
            return;
        }
        setAmount(val);
    }
    const handleCategory = (category) => {
      setCategory(category);
      setCategoryOpen(false);
      console.log(category);
    }

    const handleSubmit = () =>{
      if(title ==="" || amount ==="" || !category){
        const notify = () => toast("Please! Enter the valid data");
        notify();
        return;
      }

      const data = {
        title: title,
        amount: amount,
        category: category,
        createdAt: new Date(),
      };
      console.log("here");
     dispatch(addExpense(data))
     setModalOpen(true);
    
      
    }

  return (
    <>
        <div className='add_form'>
        <SuccessModal modalOpen = {modalOpen} setModalOpen = {setModalOpen}/>
          <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
          <div className='form_item'>
            <label>Title</label>
            <input 
            placeholder='Give a name of a expenditure' 
                value={title}
                onChange = {(e) => handleTitle(e)}
            />
          </div>

          <div className='form_item'>
            <label >Amount</label>
            <input  placeholder='Enter Amount'
            value={amount}
            className='amount_input'
            onChange={(e) => handleAmount(e)} />
          </div>
          <div className='category_container_parent'>
            <div className='category'>
                <div className='category_dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                    <label>{category ? category.title : "Category"}</label>
                    <i class= "fi-rr-angle-down"></i>
                </div>

                {categoryOpen && (
                  <div className='category_container'>
                    {cat.map((category) =>
                    <div
                    className='category_item' style={{borderRight: `5px solid ${category.color}`,
                    }}
                    key = {category.id}
                    onClick = {() => handleCategory(category)}
                    >
                     <label >{category.title}</label>
                     <img src={category.icon} alt={category.title} />
                    </div>
                     )}
                  </div>
                )}
            </div>
          </div> 
          <div className='form_add_button'>
            <div onClick={handleSubmit}>
              <label>Add</label>
              <i class="fi fi-rr-paper-plane"></i>
            </div>
          </div>    
        </div>
    </>
  )
}

export default AddForm;
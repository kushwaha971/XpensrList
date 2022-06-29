import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import AddExpense from './pages/add_expense';
import {
  Route,
   Routes,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/add_expense" exact element={<AddExpense />}/>
      </Routes>
     </Router>
    </>
     
   
  );
}

export default App;

import React from 'react'
import Inputs from './Inputs';
import {useState} from 'react';
import UpdateExpense from './UpdateExpense';

function Component() {
    const [expenses, setExpenses] = useState([
    {
      id: "101",
      expenseDate: new Date("2025-07-14"),
      details: "School Fees",
      amount: "22000"
    },
    {
      id: "102",
      expenseDate: new Date("2025-07-20"),
      details: "Shopping",
      amount: "2000"
    },
    {
      id: "103",
      expenseDate: new Date("2025-07-10"),
      details: "Lunch",
      amount: "1800"
    }
  ]);

  const [updatingExpense,setUpdatingExpense]= useState(null);
    
  const addExpense = (newExpense) => {
  setExpenses((prev) => {
    const lastId = prev.length > 0 ? parseInt(prev[prev.length - 1].id) : 100;
    const nextId = (lastId + 1).toString();

    const updatedExpense = {
      ...newExpense,
      id: nextId,
      expenseDate: new Date()
    };

    return [...prev, updatedExpense];
  });
};

 const outer = {
  width:"100%",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}

const inner = {
  backgroundColor:"orange",
  padding:"50px",
  width:"22%",
  boxSizing:"border-box"
}

const cards = {
  display:"flex",
  flexDirection:"row",
  gap:"50px",
  padding:"10px",
  flexWrap:"wrap"
}

const deleteExpense = (indexToDelete) => {
  setExpenses((prev) => prev.filter((_,i) => i !== indexToDelete));
}; 

const onUpdate = (exp) => {
  setUpdatingExpense(exp);
}

const updateExpenses = (updatedExpense) =>{
  console.log(updatedExpense);
  const newExpenses = expenses.map((exp) => (exp.id === updatedExpense.id) ? updatedExpense : exp)
  setExpenses(newExpenses);
  setUpdatingExpense(null);
}



  return (
    <div style={outer}>
      {
        !updatingExpense &&<Inputs expensefunc={addExpense}/>
      }
      {
        updatingExpense && <UpdateExpense expenseObject={updatingExpense} onUpdate={updateExpenses}/>
      }
      <div style={cards}>
      {expenses.map((exp,index) => (
        <div key={index} style={inner}>
          <h3>{exp.id}</h3>
          <p>{new Date(exp.expenseDate).toLocaleDateString()}</p>
          <p>{exp.details}</p>
          <p>{exp.amount}</p>
          <button onClick={() => onUpdate(exp)}><i className="fa-solid fa-pen"></i></button>
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </div>
      
      ))}
      </div>
    </div>
  )
}

export default Component
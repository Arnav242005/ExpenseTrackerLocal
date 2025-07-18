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
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "40px 0",
  boxSizing: "border-box"
};

const cards = {
  display: "flex",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "center",
  padding: "20px",
  width: "100%",
  maxWidth: "1200px"
};

const inner = {
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  transition: "transform 0.2s ease"
};


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
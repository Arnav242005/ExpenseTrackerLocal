import React from 'react'
import { useForm } from 'react-hook-form';

function UpdateExpense(props) {
    const expenseObject = props.expenseObject; //Object
    const updatedExpenses = props.onUpdate; //Function

    console.log(expenseObject);
    
    const{register,handleSubmit,reset} = useForm(
        {
            defaultValues:expenseObject
        }
    );

    const today = new Date();
    const dateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const update = (formdata) => {
        //console.log(formdata);
        updatedExpenses({...formdata,
            expenseDate: dateOnly        
        });
        
    }
  return (
    <div className='Editexpense'>
      <h1>Edit Expense</h1>
      <form onSubmit={handleSubmit(update)}>
            <div style={{marginBottom:"20px"}}>
                <label htmlFor='Details'>Details{" : "}</label>
                <input type='text' {...register('details')}/>
            </div>
            <div>
                <label htmlFor='Amount'>Amount{" : "}</label>
                <input type='text' {...register('amount')}/>
            </div>
            <div style={{marginTop:"10px" }}>
                <button type='submit'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateExpense

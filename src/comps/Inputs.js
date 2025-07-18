import { useForm } from 'react-hook-form'

function Inputs(props) {
    const {expensefunc} = props;
    const{register,handleSubmit,reset} = useForm();

    const addNewExpense = (formdata) => {
        expensefunc(formdata);
        reset();
    }

    const formdiv = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"50px",
        gap:"10px",
        padding:"20px",
        border:"1px solid black",
        borderRadius:"10px",
        boxShadow:"10px 5px 5px 3px black"
    }

  return (
    <>
      <h3>Add New Expense</h3>
        <form onSubmit={handleSubmit(addNewExpense)} style={formdiv}>
            <div style={{marginBottom:"20px"}}>
                <label htmlFor='Details'>Details{" : "}</label>
                <input type='text' {...register('details')}/>
            </div>
            <div>
                <label htmlFor='Amount'>Amount{" : "}</label>
                <input type='text' {...register('amount')}/>
            </div>
            <div style={{marginTop:"10px" }}>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
  )
}

export default Inputs

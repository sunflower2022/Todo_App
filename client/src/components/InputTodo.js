import React,{Fragment,useState} from "react";
const InputTodo =()=>{
    const [description,setDescription]=useState("");
    const onSubmitForm=async e =>{
        e.preventDefault();
        try{
            const body={description};
            const response=await fetch("http://localhost:5000/todos",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            window.location="/";
        }catch(err){
            console.error(err.message);
        }
    };
    return (
    <Fragment>
        
        <h1 className="text-center mt-5" >
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-sunflower-flowers-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/>
            Sunflower Todo List
        </h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={description} 
            onChange={e=>setDescription(e.target.value)}
            />
            <button className = "btn btn-outline-dark btn-lg ml-3">Add</button>

        </form>
    </Fragment> 
    );
};

export default InputTodo;
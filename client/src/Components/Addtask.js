import React,{useState} from 'react'
import "./Addtask.css"
import axios from "axios"

function Addtask(props) {

    const[task,Settask]=useState("")
    const addtask=()=>{
        if(task.trim()==='')
        {
            return
        } 
        
        else
        {
            axios.post('http://localhost:7000/api/tasks',
            {
                todo:task, //value of input box
                isComplete:false
            }
            //promise(try,catch)
            ).then(res=>{
                Settask("")//empties inputbox
                props.addTask(res.data)
            }).catch(err=>{
                console.log(err)
            })
            
        }
    }

    return (
    <div className='addtask'>
      <input type="text" placeholder='Add Task...' value={task} onChange={event=>Settask(event.target.value)}/>
      <button onClick={()=>addtask()}>Add Task</button>
    </div>
  )
}

export default Addtask

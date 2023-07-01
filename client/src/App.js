import React,{useState,useEffect} from 'react'
import "./App.css"
import axios from 'axios';
import Addtask from './Components/Addtask';
import Todolist from './Components/Todolist';
import UpdateTask from './Components/UpdateTask';

function App() {
  const [todolist,setTodolist]=useState([])
  const[tasktoUpdate,setTasktoUpdate]=useState({})
  const[showPopup,setShowPopup]=useState(false)


  useEffect(()=>{
    axios.get('http://localhost:7000/api/tasks')
    .then(res=>
      {
        setTodolist(res.data)
      })
      .catch(err=>
      {
        console.log(err)
      })

  },[])

  const addTask=newTask=>{
    setTodolist([...todolist,newTask]) //old data in todolist+newtask
  }

  
  const taskComplete=(task)=>{
    const newList=[...todolist]
    newList.forEach(item=>{
      if(item._id===task._id)
      {
        item.isComplete=task.isComplete
      }
    })
    setTodolist(newList)
  }

  const removeTask=task=>{
    const newList=todolist.filter(item=>!(item._id===task._id))
    setTodolist(newList)
  }

  const updatetask=task=>{

  }

  return (
    <div>
      <Addtask addTask={addTask}/>
      <Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={task=>setTasktoUpdate(task)}/>
      {showPopup && <UpdateTask task={tasktoUpdate} updatetask={updatetask} removePopup={()=>setShowPopup(!showPopup)}/>}
    </div>
  )
}

export default App

import React,{useState} from 'react'
import './index.css'
function App(){
    const [assignment,setAssignment]=useState([])
    const[task,setTask]=useState('');
    const[deadline,setDeadline]=useState('')
    const[time,setTime]=useState('')
    const[complete,setComplete]=useState('False')
    const[dele,setDele]=useState('')
    const handleChange=(e)=>{
        setTask(e.currentTarget.value)
    }
    const handleChange2=(e)=>{
        setDeadline(e.currentTarget.value)
    }
    const handleChange3=(e)=>{
        setTime(e.currentTarget.value)
    }
    const handleChange4=(e)=>{
        setDele(e.currentTarget.value)
    }
    
    const addAssignment=(task,deadline,time,complete)=>{
        let copy=[...assignment]
        copy=[...copy,{id:assignment.length+1,task:task,deadline:deadline,time:time,complete:complete}]
        setAssignment(copy);
        setDeadline('')
        setTask('')
        setTime('')
    }
    const delAssignment=(dele)=>{
        let copy=assignment.filter((question)=>question.id!=dele)
        setAssignment(copy)
        setDele('')
    }
    return(
        <div>
            <h1>TO-DO ASSIGNMENTS</h1>
            <div className="inpu">
            <input value={task} onChange={handleChange} placeholder="Enter Task"></input><br/>
            <input value={deadline} onChange={handleChange2} placeholder="Enter Deadline" pattern="[0-9]{2}[-]{1}[0-9]{1}[-]{1}[0-9]{4}"></input><br/>
            <input value={time} onChange={handleChange3} placeholder="Enter Time"></input><br/>
            <button onClick={()=>addAssignment(task,deadline,time)}>Add Assignment</button><br></br><br/><br/>
            <input value={dele} onChange={handleChange4} placeholder="Enter ID No."></input><br/>
            <button onClick={()=>delAssignment(dele)}>Delete Assignment</button><br/><br/><br/>
            </div>
            <table>
              <div>
                <tr>
                    <th>ID No.</th>
                    <th>Task</th>
                    <th>DeadLine</th>
                    <th>Time</th>
                </tr>
            
               {assignment.map((question)=>(
                <tr id={question.id}>
                    <td>{question.id}</td>
                    <td>{question.task}</td>
                    <td>{question.deadline}</td>
                    <td>{question.time}</td>
                </tr>
      ))}
            </div>
            </table>
        </div>
    )
}
export default App;
import "./App.css";
import {useState,useEffect} from 'react'
import View from "./components/View";
import Table from 'react-bootstrap/Table';
import ViewTask from "./components/ViewTask";



const localStorageData = () => {
  const data = localStorage.getItem('employees')

  if(data){
    return JSON.parse(data)
  }else{
    return [];
  }
}


const localStorageTask = () => {
  const data = localStorage.getItem('tasks')

  if(data){
    return JSON.parse(data)
  }else{
    return [];
  }
}





function App() {

  const[employees, setEmployee] = useState(localStorageData())


const [fullname, setFullName] = useState('');
const [email, setEmail] = useState('');
const[phone, setPhone] = useState('');
const[date, setDate] = useState('');
const[salary, setSalary] = useState('')


function addEmployeeSubmit(e){
  e.preventDefault()

  let employee = {
    fullname,
    email,
    phone,
    date,
    salary
  }

  setEmployee([...employees,employee])
  setFullName('');
  setEmail('');
  setPhone('')
  setDate('');
  setSalary('')
}

// const [editEmp, setEditEmp] = useState({
//   fullname:'',
//   email: '',
//   phone: '',
//  date: '',
//   email: ''   
  
// })

// const handleEditFormChange = (event) => {
//   event.preventDefault();
//   const name  = event.target.getAttribute('name');
//   const fieldValue = event.target.value 
//   const newFormDate = {...editEmp};
//   newFormDate[name] = fieldValue;

//   setEditEmp(newFormDate)
// }

const deleteEmployee = (date) => {
  const filterEmployee = employees.filter((element , index) => {
    return element.date !== date
  })

  setEmployee(filterEmployee)

}






useEffect(()=>{

  localStorage.setItem('employees', JSON.stringify(employees));

},[employees])


const [title, setTitle] = useState('');
const[description, setDescription] = useState('');

const [tasks, setTask] = useState(localStorageTask())

const addTask = (e) => {
e.preventDefault();

let task = {
  title,
  description,
  fullname
}

setTask([...tasks,task])
setTitle('');
setDescription('');
setFullName('')
}

useEffect(()=>{

  localStorage.setItem('tasks', JSON.stringify(tasks));

},[tasks])

const deleteTask = (title) => {
  const filteredTask = tasks.filter((element,index) => {
    return element.title !== title  
  })

  setTask(filteredTask)
}








  return (
    <div className="App">
      <div className="wrapper">
        <h1>Employee and Task App</h1>
        <p>Add and view Employee using local storage</p>
        <div className="main">
          <div className="form-container">
            <form className="form-group" autoComplete="off"
            onSubmit={addEmployeeSubmit}>
              <label>Full name</label>
              <input type='text' className="form-control" required 
              onChange={(e) => setFullName(e.target.value)} value={fullname}>

              </input>
              <label>Email</label>
              <input type='text' className="form-control" required 
              onChange={(e) => setEmail(e.target.value)} value={email}>

              </input>
              <label>Phone number</label>
              <input type='number' className="form-control" required
              onChange={(e) => setPhone(e.target.value)} value={phone}
              ></input>
              <label>Date of birth</label>
              <input type='date' className="form-control" required 
              onChange={(e) => setDate(e.target.value)} value={date}></input>
              <label>Salary</label>
              <input type='number' className="form-control" required 
              onChange={(e) => setSalary(e.target.value)} value={salary}></input>
              <br></br>
              <button type="submit" className="btn btn-success btn-md">Add Employee</button>
            </form>
            <br></br>
          </div>
        </div>
        <div className="view-container">
          {employees.length>0 && <div className='table-responsive'>
            <Table  striped bordered hover >
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Date of birth</th>
                  <th>Salary</th>
                  <th>Actions</th>
                  
                </tr>
              </thead>

              <tbody>
                <View employees={employees} deleteEmployee={deleteEmployee}></View>
              </tbody>
            </Table>
            </div>}
            {employees.length < 1 && <div>No Employees added yet</div>}
        </div>


        <p>Add Task on Local Storage</p>

        <div className="form-container">
            <form className="form-group" autoComplete="off"
            onSubmit={addTask}>
              <label>Title</label>
              <input type='text' className="form-control" required 
              onChange={(e) => setTitle(e.target.value)} value={title}>

              </input>
              <label>Description</label>
              <input type='text' className="form-control" required 
              onChange={(e) => setDescription(e.target.value)} value={description}>

              </input>
              <label>Employee</label>
              <input type='text' className="form-control" required
              onChange={(e) => setFullName(e.target.value)} value={fullname}
              ></input>
               <br></br>

              <button type="submit" className="btn btn-success btn-md">Add Task</button>
              </form>
          </div>

          <div className="view-container">
          {tasks.length>0 && <div className='table-responsive'>
            <Table  striped bordered hover >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description </th>
                  <th>Employee</th>
                  
                </tr>
              </thead>

              <tbody>
                <ViewTask tasks={tasks} deleteTask={deleteTask} ></ViewTask>
              </tbody>
            </Table>
            </div>}
            {tasks.length < 1 && <div>No Employees added yet</div>}
        </div>

      </div>



    </div>
  );
}

export default App;

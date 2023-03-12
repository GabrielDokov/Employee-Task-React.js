import EditRow from "./EditRow"
import ReadRow from "./ReadRow"
import {useState} from 'react';


function View({employees,deleteEmployee}){

    const [editFormData, setEditFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        date: "",
        salary:""
      });
      
      const handleEditFormChange = (event) => {
        event.preventDefault();
      
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
      
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
      
        setEditFormData(newFormData);
      };


    const[editName, setEditName] = useState("");

    const editEmployee = (event,employee) => {
        event.preventDefault()
        setEditName(employee.fullname)

        const formValues = {
            fullname: employee.fullname,
            email: employee.email,
            phone: employee.phone,
            date: employee.date,
            salary: employee.salary,
          };

          setEditFormData(formValues);

    }

    // const handleEditFormSubmit = (event) => {
    //     event.preventDefault();
    
    //     const editedEmployeee = {
        
    //         fullname: editFormData.fullname,
    //         email: editFormData.email,
    //         phone: editFormData.phone,
    //         date: editFormData.date,
    //         salary: editFormData.salary,
    //     };

    //     const newEmp = [...employees];

    //     const index = employees.findIndex((employees) => employees.fullname === editName);

    //     newEmp[index] = editedEmployeee;

    //     setEditFormData(editedEmployeee)

        



    return(
        employees.map((e) => 

        <>

    {editName === e.fullname ? <EditRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}></EditRow> :  <ReadRow employees={e} deleteEmployee={deleteEmployee} editEmployee={editEmployee}></ReadRow >  } 
        

           
            </> 
           
        )
    )
 }
// }
export default View
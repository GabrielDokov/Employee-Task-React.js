function ReadRow({employees,deleteEmployee,editEmployee}){


    return(
        <tr key={employees.date}>
                <td>{employees.fullname}</td>
                <td>{employees.email}</td>
                <td>{employees.phone}</td>
                <td>{employees.date}</td>
                <td>{employees.salary}$</td>
                <td className="delete-btn" onClick={() => deleteEmployee(employees.date)}>Delete
                </td>  
                <td onClick={(event) => editEmployee(event,employees)}>Edit</td>
                
            </tr>
    )



}
export default ReadRow
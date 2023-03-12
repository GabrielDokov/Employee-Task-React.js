//  import { useState ,useEffect } from "react";

function EditRow({editFormData,handleEditFormChange}){
   
   

    return(
        
        
        <tr>
            <td>
                <input type='text' required placeholder="Full Name" name="fullname"
              value={editFormData.fullname} onChange={handleEditFormChange} ></input>
            </td>
            <td>
                <input type='text' required placeholder="Email" name="email"
                value={editFormData.email}  onChange={handleEditFormChange}
               ></input>
            </td>
            <td>
                <input type='number' required placeholder="Phone" name="phone"
                 value={editFormData.phone}  onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type='date' required placeholder="Date" name="date"
                 value={editFormData.date}  onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input type='number' required placeholder="Salary" name="salary"
                value={editFormData.salary}  onChange={handleEditFormChange}
              ></input>
            </td>
            
            <td>
            <button >Save</button>
            </td>
        </tr>
    )



}
export default EditRow
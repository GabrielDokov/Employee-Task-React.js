function ViewTask({tasks,deleteTask,EditTask}){

    return(
        tasks.map((t) => (

            <tr key={t.fullname}>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>{t.fullname}</td>
            <td className="delete-btn" onClick={()=> deleteTask(t.title)}>Delete</td>
            <td className="edit-btn" onClick={() => EditTask(t.tite)}>Edit</td>
            </tr>
        ))
    )


}
export default ViewTask
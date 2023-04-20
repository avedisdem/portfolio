import React from 'react'
/*import EditIcon from 'https://mui.com/material-ui/material-icons/?query=Edit';
import DeleteIcon from 'https://mui.com/material-ui/material-icons/?query=Delete';*/
import './Style/TodoList.css'


function TodoList({todo,id,handleEdit,handleDelete}) {
  
  return (
    <div className='todoList'>
        <div className="todoList__leftSide">
            {id} - {" " + todo}
        </div>
        <div className="todoList__rightSide">
            <button onClick={() => handleEdit(id)}>Edit </button>
            <button onClick={() => handleDelete(id)}>Delete </button>
        </div>  
    </div>
  )
}

export default TodoList
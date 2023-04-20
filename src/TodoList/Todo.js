import React, { useState } from 'react'
//import { Button } from '@mui/material';
import './Style/Todo.css'
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

function Todo() {
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const [todoId,setTodoId] = useState();
    const [isEditing,setIsEditing] = useState(false);

const handleSubmite = (e) => {
    if(isEditing)
    {
        const newTodo = todos.map((todo1, index) =>  index === todoId ? todo : todo1 )
        setTodos([...newTodo])
        setTodo("")
        setIsEditing(false);
    }
    else if(todo)
    {
        setTodos([...todos,todo]);
        setTodo("")
    } 
    setTodo("")
    console.log("teset",todos)
}

const handleEdit = (id) => {
    console.log("editing",isEditing)
    setTodoId(id);
    setIsEditing(true);
}

const handleDelete = (id) => {
    setIsEditing(false);
    const newTodo = todos.filter((_,index) => index !== id)
    setTodos([...newTodo]);
    console.log("delete",todos)
}
  return (
    <div className='todo'>
            <Link to="/" >
                <h1>Home</h1>
            </Link>
            <h1>TODO LIST</h1>
            <div className="todo__bottom">
                <input value={todo} onChange={e => setTodo(e.target.value)} placeholder='ADD A TODO'/>
                <button onClick={handleSubmite}>{isEditing?`Save Edit ${todoId + 1}`:"Add"}</button>
            </div>
            <div className="todo__todos">
                {
                    todos.map((todo1,index) => (
                    <TodoList 
                        key={index}
                        id = {index}
                        todo = {todo1} 
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}   
                    />    
                ))}
            </div>
    </div>
  )
}

export default Todo
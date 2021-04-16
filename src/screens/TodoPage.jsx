import React, {useState} from 'react';
import '../screens/todoPage.css';
import {Link} from 'react-router-dom'


const TodoPage = () => {


    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const readyTodo = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.status = !todo.status
                }
                console.log(todo)
                return todo
            })
        )
    }

    const handleClick = () => {
        const newTodo = {
            id: new Date().getTime().toString(),
            name: value,
            data: new Date(),
            status: true,
        }
        setTodos((state) => {
            return [...state, newTodo]
        });
        setValue('')
    }

    const handleEnter = (e) => {
            if (e.key === 'Enter') handleClick();
    }

    return (
        <div>
            <Link to='/contacts'>To Contacts</Link>
            <h1>Todo Page</h1>
            <ul>
                {todos.map((todo) => {
                    const  {id, name, date, status} = todo
                    return (
                        <li
                            className={status ? "undone" : "done"}
                            key={id}>
                            {name}
                            <span>
                                {date}
                                <input onClick={() => readyTodo(id)} type="checkbox" name="" id="" />
                            </span>
                        </li>
                    )
                }) }
            </ul>
            <input type="text" name="" id="newTodoText" value={value} onChange={e => setValue(e.target.value)}
                onKeyUp={ handleEnter }/>
            <button onClick={handleClick}>Add todo</button>
        </div>
    );
}

export default TodoPage;

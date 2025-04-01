import React from 'react';
import { useState } from 'react';
import { useTodo } from '../context/TodoContext.js';


export default function TodoForm() {

    const [todo, setTodo] = useState("");//to manage todos using useState hook
    const { addTodo } = useTodo();//taking value using context 

    const add = (e) => {
        e.preventDefault()//stop sending data

        if (!todo) {//if todo is not present than dont execute below methods
            return
        }

        addTodo({ todo, completed: false })//passing an object to maintain initial structure that was provided, since initially will be false 
        setTodo("");//make empty after added
    }


    return (
        <form onSubmit={add} className="flex">

            <input
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                type="text"
                placeholder="Enter Your Todos"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
                type="Submit">
                ADD TODO
            </button>

        </form>
    )
}
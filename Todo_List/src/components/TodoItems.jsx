import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext.js';

export default function TodoItems({ todo }) {

    const { toggleComplete, updateTodo, deleteTodo } = useTodo();//accessing custom hook of context
    const [todoMsg, setTodomsg] = useState(todo.todo)//accessing todo message present in todo object
    const [isTodoEditable, setIsTodoEditable] = useState(false)//by default value is false

    //toggleComplete
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    //to edit
    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })//sending id and todo object
        //object is being renovated using spread operator to update message of todo in object
        setIsTodoEditable(false);//after updating return false
    }

    //spread operator is ready for modification to accept new changes
    //The spread operator (...) is used to copy all properties from one object into another.
    //4️ [{ id: Date.now(), ...todo }, ...prev] (Adding the New Todo)
    //New todo goes at the beginning of the list.
    //Previous todos(prev) remain unchanged.
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input

                type="checkbox"
                className="cursor-pointer"
                onChange={toggleCompleted}
                checked={todo.completed}

            />

            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodomsg(e.target.value)}
                readOnly={!isTodoEditable}
            //if isTodoEditable->true  than editable
            //if isTodoEditable->false  than not editable

            />

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={
                    () => {

                        if (todo.completed) { return }
                        //doesnot runs below contents if task completed


                        if (isTodoEditable) {//if already in edit mode
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);//sets false to true
                    }}
                disabled={todo.completed}//to disable button when task is completed
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>


            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}//call function to delete
            >
                ❌
            </button>


        </div>
    )

}
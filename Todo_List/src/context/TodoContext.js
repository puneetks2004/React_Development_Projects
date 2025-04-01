//here we will create context

import { useContext, createContext } from 'react';

export const TodoContext = createContext({
    //this as  a object that provides a generalised structure of the single todo
    todos: [{
        id: 1,
        todo: "Todo message",
        completed: false
    }],

    //THESE ARE DEFAULT METHODS

    addTodo: (todo) => {
        //for addition of new todos 
    },

    deleteTodo: (id) => {
        //to delete specefic todo
    },

    updateTodo: (id, todo) => {
        //to specefically update the todo
    },

    toggleComplete: (id) => {
        //to mark todo as completed
    }


})



//creating Provider
export const TodoProvider = TodoContext.Provider;



//creating a custom hook that includes context
export const useTodo = () => {
    return useContext(TodoContext);
}
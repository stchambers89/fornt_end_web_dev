import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  
  //Establish States
  const [inputText, setInputText] = useState ('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once on new page load to look in local storage
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Use Effect
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions - yes this will throw warning but I like to keep 
  //things seperate. Seems easier to maintain code. 
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Use Local Storage

  //SAVE
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));    
  };

  //Load
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem( 'todos', JSON.stringify([]) );
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My First React </h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

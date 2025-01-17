"use strict";

const inputBox = document.getElementById("input-box");
const todoUl = document.getElementById("todo-list");

// Add new task to todo list when "Add" button is clicked
const addTodo = () => {
  let newTodo = inputBox.value.trim();
  if (newTodo === "") {
    alert("Please write something!");
    return;
  } 
  else {
    const todoLi = document.createElement("LI");
    todoLi.textContent = newTodo;
    
    const closeSpan = document.createElement("SPAN");
    closeSpan.textContent = "\u00D7";
    closeSpan.className = "close";

    todoLi.appendChild(closeSpan);
    todoUl.appendChild(todoLi);
    
    clearInput();
    saveDataToLocalStorage();
  }
}

// Clear input box when "Clear" button is clicked
const clearInput = () => { 
  inputBox.value = ""; 
}

// Event listener for toggling and closing tasks
const toggleCheck = (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
  else if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
  saveDataToLocalStorage();
}

todoUl.addEventListener('click', toggleCheck);

// Save todo list data in the browser
const saveDataToLocalStorage = () => {
  localStorage.setItem("todoData", todoUl.innerHTML);
}

const showTodoList = () => {
  todoUl.innerHTML = localStorage.getItem("todoData");
}

// Show saved todo list
showTodoList();
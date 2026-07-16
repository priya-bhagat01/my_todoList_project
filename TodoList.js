"use strict";

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

displayTodoList();

function displayTodoList() {
  let todoListHTML = '';
     for (let i = 0; i < todoList.length; i++) {
	   const todo = todoList[i];
	let formattedDate = '';
	if (todo.dueDate) {
	   const parts = todo.dueDate.split('-'); //splits date into [yyyy, mm, dd]
	   formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`; //rearranges into [dd, mm, yyyy]
	}
	   const html = `
	   <li>
	     <span class="todo-name">${todo.name}</span>
	   	 <span class="todo-date">${formattedDate}</span> 
	      <button class ="delete-button">Delete</button>
	      </li>`;
	   todoListHTML += html;
       }
  document.querySelector('.list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.delete-button')
   .forEach((deleteButton, index) => {
  		deleteButton.addEventListener('click', () => {
  			todoList.splice(index, 1)
        displayTodoList();
	      localStorage.setItem('todoList', JSON.stringify(todoList));
  	})	  
});

function addTodoList() {
	const inputElement = document.querySelector('.input-button');
	const dateInputElement = document.querySelector('.date-box')
	const name = inputElement.value;
	const dueDate = dateInputElement.value;
	  if (name.trim() != '') { //(prevents adding empty text)
			todoList.push({
			 // name: name, (use shortcut instead)
			 // dueDate: dueDate
			 name,
			 dueDate
			});
	  console.log(todoList);
	  inputElement.value = '';
	  dateInputElement.value = '';
	  localStorage.setItem('todoList', JSON.stringify(todoList));
	  };
    displayTodoList();
}

document.querySelector('.add-button')
 .addEventListener('click', () => {
 	 addTodoList();
 });
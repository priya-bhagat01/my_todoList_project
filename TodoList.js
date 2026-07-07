const todoList = [];
displayTodoList();

function displayTodoList() {
  let todoListHTML = '';
     for (let i = 0; i < todoList.length; i++) {
	   const todo = todoList[i];
	   const html = `<p>${todo}</p>`;
	   todoListHTML += html;
       }
  document.querySelector('.list')
    .innerHTML = todoListHTML;
}

function addTodoList() {
	const inputElement = document.querySelector('.input-button');
	const name = inputElement.value
	  if (name.trim() != '') { //(prevents adding empty text)
			todoList.push(name);
	  console.log(todoList);
	  inputElement.value = '';
	  };
    displayTodoList();
}

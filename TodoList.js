const todoList = [];
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
	   <p>
	      ${todo.name}
	   	  ${formattedDate}
	      <button onclick ="
	   	    todoList.splice(${i}, 1)
            displayTodoList();
	      ">Delete</button>
	   </p>`;
	   todoListHTML += html;
       }
  document.querySelector('.list')
    .innerHTML = todoListHTML;
}

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
	  };
    displayTodoList();
}

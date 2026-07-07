const todoList = [];
function addTodoList() {
	const inputElement = document.querySelector('.input-button');
	const name = inputElement.value
	if (name.trim() != '') {
		todoList.push(name);
	console.log(todoList);
	inputElement.value = '';
    };	
}

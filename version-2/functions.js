// Initial data
var todos = ['item 1', 'item 2', 'item 3'];

// function for displaying todos
function displayTodos(){
	console.log('My todos', todos);
}

displayTodos();

// function for adding todos
function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

addTodo('hello there');

// function to change todos
function changeTodo(position, newValue){
	todos[position] = newValue;
	displayTodos();
}

changeTodo(0, 'changed');

// function to delete todos
function deleteTodo(position){
	todos.splice(position, 1);
	displayTodos();
}

deleteTodo(todos.length - 1)
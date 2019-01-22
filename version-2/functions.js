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
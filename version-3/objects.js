// store todo array on an object
var todoList = {
	todos: ['item 1','item 2', 'item 4'],
	displayTodos: function(){
		console.log(this.todos);
	},
// method to add a todo	
	addTodo: function(todo){
		this.todos.push(todo);
		this.displayTodos();
	},
// method to change a todo		
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
		this.displayTodos();		
	}
};
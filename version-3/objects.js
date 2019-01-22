// store todo array on an object
var todoList = {
	todos: ['item 1','item 2', 'item 4'],
	displayTodos: function(){
		console.log(this.todos);
	},
// method to change a todo		
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
		this.displayTodos();		
	}
};
// store todo array on an object
var todoList = {
	todos: [],
	displayTodos: function(){
		console.log(this.todos);
	},
// method to add a todo	
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
// method to change a todo		
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();		
	},
// method to delete a todo		
	deleteTodo: function(position){
		this.todos.splice(position, 1);
		this.displayTodos();		
	},
	toggleCompleted: function(position){
	  var todo = this.todos[position];
	  todo.completed = !todo.completed;
	  this.displayTodos();
	}
};
// store todo array on an object
var todoList = {
	todos: [],
	displayTodos: function(){
	  if(this.todos.length === 0){
	    console.log('Your todo list is empty!');
	  } else {
			console.log('My Todos: '); 
			for(var i = 0; i < this.todos.length; i++){
		  	if(this.todos[i].completed === true){ 
					console.log('(x)', this.todos[i].todoText);
		  	} else {
		    		console.log('( )', this.todos[i].todoText);
		  	}
		  }
		} 
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
	},
	toggleAll: function(){
	  var totalTodos = this.todos.length;
	  var completedTodos = 0;
	  //Get number of completed todos
	  for(let i = 0; i < totalTodos; i++){
	    if(this.todos[i].completed === true) {
	      completedTodos++;
      }
	  }
    //If everything's true make everything false
    if(completedTodos === totalTodos){
      for(let i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      for(let i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
	}
};

var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
	},
	addTodo: function(){
	  var addTodoTextInput = document.getElementById("addTodoTextInput");
	  todoList.addTodo(addTodoTextInput.value);
	  addTodoTextInput.value = '';
	},
	changeTodo: function(){
	  var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
	  var changeTodoTextInput = document.getElementById("changeTodoTextInput");
	  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';	 
    changeTodoTextInput.value = '';
	},
	deleteTodo: function(){
	  var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
	  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
	},
	toggleCompleted: function(){
	  var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
	  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
	  toggleCompletedPositionInput.value = '';
	},
	toggleAll: function(){
		todoList.toggleAll();
	}
};

var view = {
	displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++){
      var todosLi = document.createElement('li');
      todosUl.appendChild(todosLi);
		}
	}
};


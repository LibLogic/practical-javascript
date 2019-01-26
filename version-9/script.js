// store todo array on an object
var todoList = {
	todos: [],
// method to add a todo	
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
// method to change a todo		
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
	},
// method to delete a todo		
	deleteTodo: function(position){
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position){
	  var todo = this.todos[position];
	  todo.completed = !todo.completed;
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
	}
};

var handlers = {
	addTodo: function(){
	  var addTodoTextInput = document.getElementById("addTodoTextInput");
	  todoList.addTodo(addTodoTextInput.value);
	  addTodoTextInput.value = '';
	  view.displayTodos();
	},
	changeTodo: function(){
	  var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
	  var changeTodoTextInput = document.getElementById("changeTodoTextInput");
	  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';	 
      changeTodoTextInput.value = '';
	  view.displayTodos();    
	},
	deleteTodo: function(){
	  var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
	  todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
	  view.displayTodos();
	},
	toggleCompleted: function(){
	  var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
	  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
	  toggleCompletedPositionInput.value = '';
	  view.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
	  view.displayTodos();		
	}
};

var view = {
	displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
	  for (var i = 0; i < todoList.todos.length; i++){
      var todosLi = document.createElement('li');
      var todoTextWithCompletion = '';
      var todo = todoList.todos[i];
      
      if(todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;        
      }
      
  	  todosLi.textContent = todoTextWithCompletion;      
      todosUl.appendChild(todosLi);
		}
	}
};


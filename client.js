var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var completedTodos = 0;
    // count completed todos
    this.todos.forEach(function(todo){
      todo.completed === true ? completedTodos++ : null;
    });
    // if all todos are true, make everything false, otherwise make everything true
    this.todos.forEach(function(todo){
      completedTodos === todoList.todos.length ? todo.completed = false : todo.completed = true;
     });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, i){
      var todoLi = document.createElement('li');
      var todoText = '';
      todo.completed === true ? 
      todoText = '(x) ' + todo.todoText : todoText = '( ) ' + todo.todoText;
      todoLi.id = i;
      todoLi.textContent = todoText;
      todoLi.appendChild(view.createDeleteButton());
      todosUl.appendChild(todoLi);
    });
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';                                          
    return deleteButton;
  },
  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(e){
	    var elementClicked = e.target;
	    if(elementClicked.className === 'deleteButton'){
	      handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
	    }
  	});
  }
};

view.setUpEventListeners();
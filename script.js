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
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }

    }
};

var handlers = {

    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value); //.value DOM input
        addTodoTextInput.value = ''; //empty input value after entering todo
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPosition = document.getElementById("changeTodoPosition");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(){
      var deleteTodoPosition = document.getElementById("deleteTodoPosition");
      todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
      deleteTodoPosition.value = '';
      view.displayTodos();
    },
    toggleCompleted: function(){
      var toggleCompletedPosition = document.getElementById("toggleCompletedPosition");
      todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
      toggleCompletedPosition.value = '';
      view.displayTodos();
    }
};
//UI render object
var view = {
  displayTodos: function(){
    var todoUl = document.querySelector('ul');
    //clear the list to avoid duplicates
    todoUl.innerHTML = '';
    for(var i = 0; i < todoList.todos.length; i++){
    var todoLi = document.createElement('li');
    var todo = todoList.todos[i];
    var todoTextWithCompletion = '';

    if (todo.completed === true){
      todoTextWithCompletion = "(x) " + todo.todoText;
    } else {
      todoTextWithCompletion = "( ) " + todo.todoText;
    }

    todoLi.textContent = todoTextWithCompletion;
    todoUl.appendChild(todoLi);
  }
}
};

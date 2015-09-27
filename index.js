var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [],
    }
  },
  addTodo: function() {
    // Get the todo text
    var todoText = document.getElementById('todo-input').value;
    // Add the new todo to the array
    var todos = this.state.todos;
    todos.push({
      name: todoText,
    });
    console.log(todos);
    this.setState({
      todos: todos,
    });
  },
  renderTodo: function(todo, i) {
    return (
      <li key={i}>{todo.name}</li>
    );
  },
  render: function() {
    var todoItemElements = this.state.todos.map(this.renderTodo);
    return (
      <div>
        <h1>Hello world!</h1>
        <input type="text" id="todo-input"></input>
        <button onClick={this.addTodo}>Add</button>
        <ol>
          {todoItemElements}
        </ol>
      </div>
    );
  },
});

React.render(
  <TodoApp />,
  document.getElementById('content')
);

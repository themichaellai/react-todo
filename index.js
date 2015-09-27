var TodoRow = React.createClass({
  getInitialState: function() {
    return {
      done: false,
    };
  },
  toggleShow: function() {
    console.log('toggleShow');
    this.setState({
      done: !this.state.done,
    });
  },
  render: function() {
    var done;
    if (this.state.done) {
      done = (<span>Done!</span>);
    }
    return (
      <li onClick={this.toggleShow}>{this.props.todoName} {done}</li>
    );
  },
});

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
    this.setState({
      todos: todos,
    });
  },
  renderTodo: function(todo, i) {
    return (
      <TodoRow key={i} todoName={todo.name} />
    );
  },
  render: function() {
    var todoItemElements = this.state.todos.map(this.renderTodo);
    return (
      <div>
        <h1>Hello World!</h1>
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
  <TodoApp name={name} />,
  document.getElementById('content')
);

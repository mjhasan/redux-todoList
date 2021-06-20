import { connect } from 'react-redux';
import './App.css';
import { addTodo, deleteTodo } from './redux/todoActions';

function App(props) {
  const { todo, addTodo, deleteTodo } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: todo.length + 1, context: e.target[0].value };
    addTodo(newTodo);
  }

  return (
    <main>
      <div className="app-header">
        <h2>Todo List</h2>
        <p>Total Todo : {todo.length}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" /> <button>Add Todo</button>
        </form>
        <ul>
          {
            todo && todo.map(t =>
              <li key={t?.id}>
                {t?.context}
                <button onClick={() => deleteTodo(t.id)}>Delete</button>
              </li>)
          }
        </ul>
      </div>

    </main>
  );
}

const mapStateToProps = (state) => {
  return { todo: state.todo }
}

const mapDispatchToProps = {
  addTodo: addTodo,
  deleteTodo: deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

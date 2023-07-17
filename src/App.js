import { useStore, actions } from './store';
import { useRef } from 'react'

function App() {

  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputElement = useRef();

  console.log(state);

  const handleAdd = () => {
    dispatch(actions.addTodos(todoInput));
    inputElement.current.focus();
  }

  return (
    <div className="App">
      <input
        value={todoInput}
        ref={inputElement}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={() => handleAdd()}>Add</button>
      {todos && todos.length > 0 &&
        todos.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
    </div>
  );
}

export default App;

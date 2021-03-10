import React from 'react';

import { AddTodo, TodoList } from './components';
import { TodosProvider } from './contexts/TodosContext';

function App() {
  // const [todos, setTodos] = useState([
  //   { text: 'Learn about react.js' },
  //   { text: 'Meeting with client' },
  //   { text: 'write article about react.js' },
  // ]);
  return (
    <TodosProvider>
      <div className="box">
        <AddTodo />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;

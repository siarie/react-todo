import React, { useContext } from 'react';

import TodoItem from '../TodoItem';
import { TodosContext } from '../../contexts/TodosContext';

const TodoList = () => {
  const todos = useContext(TodosContext);
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((item, i) => <TodoItem key={i} value={item} />)
      ) : (
        <p
          className="message"
          style={{ color: '#646464', textAlign: 'center', fontStyle: 'italic' }}
        >
          You have nothing to do
        </p>
      )}
    </div>
  );
};

export default TodoList;

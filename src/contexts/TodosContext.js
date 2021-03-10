import React, { createContext } from 'react';

import TodosReducer from '../reducers/TodosReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// const defaultTodos = [
//   { id: '0', task: 'Read a book', completed: false },
//   { id: '1', task: 'Jog in a playground', completed: true },
//   { id: '2', task: 'Write articles', completed: false },
//   { id: '3', task: 'Write articles about svelte.js', completed: false },
// ];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer('todos', TodosReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

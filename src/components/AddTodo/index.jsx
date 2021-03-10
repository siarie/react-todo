import React, { useContext } from 'react';

import { DispatchContext } from '../../contexts/TodosContext';
import useInputState from '../../hooks/useInputState';
import { ADD_TODO } from '../../constants/actions';
import './style.css';

const AddTodo = () => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      dispatch({ type: ADD_TODO, task: value });
    }
    clearValue();
  };
  return (
    <div className="add-todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="add new item"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddTodo;

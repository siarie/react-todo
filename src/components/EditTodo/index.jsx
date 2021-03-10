import React, { useContext } from 'react';

import { DispatchContext } from '../../contexts/TodosContext';
import useInputState from '../../hooks/useInputState';
import { EDIT_TODO } from '../../constants/actions';
import './style.css';

const EditTodo = ({ todo, toggleEdit }) => {
  const { id, task } = todo;
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT_TODO, id, task: value });
    toggleEdit();
    clearValue();
  };

  return (
    <div className="edit-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
          autoFocus
        />
      </form>
      <button
        type="button"
        className="edit-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleEdit();
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default EditTodo;

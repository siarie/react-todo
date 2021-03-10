import React, { useContext, memo } from 'react';

import EditTodo from '../EditTodo';
import { DispatchContext } from '../../contexts/TodosContext';
import useToggleState from '../../hooks/useToggleState';
import { REMOVE_TODO, TOGGLE_TODO } from '../../constants/actions';
import './style.css';

const TodoItem = ({ value }) => {
  const { id, task, completed } = value;
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <div className="todo-item edit">
        <EditTodo todo={value} toggleEdit={toggle} />
      </div>
    );
  }

  return (
    <div
      className="todo-item"
      onClick={() => dispatch({ type: TOGGLE_TODO, id })}
    >
      <div className="todo-check">
        <input type="checkbox" checked={completed} readOnly />
      </div>
      <div className="todo-text">{task}</div>
      <div className="todo-action">
        <span
          className="todo-edit"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit-3"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </span>
        <span
          className="todo-remove"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: REMOVE_TODO, id });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default memo(TodoItem);

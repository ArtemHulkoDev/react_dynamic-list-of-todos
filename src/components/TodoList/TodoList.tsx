import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedTodo: Todo,
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo>>,
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  setSelectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr
          data-cy="todo"
          className=""
          key={todo.id}
        >
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p className={classNames({
              'has-text-success': todo.completed,
              'has-text-danger': !todo.completed,
            })}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            {selectedTodo.id === todo.id ? (
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => {
                  setSelectedTodo({
                    id: 0,
                    title: '',
                    completed: false,
                    userId: 0,
                  });
                }}
              >
                <span className="icon">
                  <i className="far fa-eyefar fa-eye-slash" />
                </span>
              </button>
            ) : (
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => {
                  setSelectedTodo({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                    userId: todo.userId,
                  });
                }}
              >
                <span className="icon">
                  <i className="far fa-eye" />
                </span>
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
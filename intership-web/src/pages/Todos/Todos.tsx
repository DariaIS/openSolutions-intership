import React from 'react';

import { TodoAddRow } from './components/TodoAddRow';
import { TodoList } from './components/TodoList/TodoList';
import { useTodos } from './hooks/useTodos';

import s from './styles.module.scss';

type Props = {
  someProp?: any;
};

export const TodosPage: React.FC<Props> = ({ someProp }) => {
  const {
    handleAddTodo,
    handleChangeNewTodoName,
    handleToggleCompleteStatus,
    error,
    newTodoName,
    todos,
  } = useTodos({});

  return (
    <div className={s.container}>
      <TodoAddRow
        handleAddTodo={handleAddTodo}
        handleChangeNewTodoName={handleChangeNewTodoName}
        error={error}
        newTodoName={newTodoName}
      />
      <TodoList todos={todos} handleToggleCompleteStatus={handleToggleCompleteStatus} />
    </div>
  );
};

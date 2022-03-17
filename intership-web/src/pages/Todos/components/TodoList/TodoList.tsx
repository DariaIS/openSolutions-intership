import React, { useMemo, useState } from 'react';
import { Button } from 'Common/UI/Button';
import { useTodos } from '../../hooks/useTodos';
import { TodoElement } from '../TodoElement';

type Props = Pick<ReturnType<typeof useTodos>, 'todos' | 'handleToggleCompleteStatus'>;

export const TodoList: React.FC<Props> = ({ todos, handleToggleCompleteStatus }) => {
  const [listStatus, setListStatus] = useState<'active' | 'completed'>('active');
  const showActive = () => {
    setListStatus('active');
  };
  const showCompleted = () => {
    setListStatus('completed');
  };

  const filteredTodos = useMemo(
    () =>
      todos.filter(({ isCompleted }) => (listStatus === 'completed' ? isCompleted : !isCompleted)),
    [todos, listStatus],
  );

  console.log({ todos });
  console.log({ filteredTodos });

  return (
    <div>
      <div>
        <Button onClick={showActive}>Active</Button>
        <Button onClick={showCompleted}>Completed</Button>
      </div>
      <div>{listStatus}</div>
      {todos.length > 0 ? (
        <div>
          {filteredTodos.map(({ id, isCompleted, name }) => {
            const toggleStatus = () => handleToggleCompleteStatus({ id });
            return (
              <TodoElement
                key={id + name}
                name={name}
                isCompleted={isCompleted}
                toggleStatus={toggleStatus}
              />
            );
          })}
        </div>
      ) : (
        <div>no todos</div>
      )}
    </div>
  );
};

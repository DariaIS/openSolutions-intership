import React from 'react';
import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useTodos } from '../../hooks/useTodos';

type Props = Pick<
  ReturnType<typeof useTodos>,
  'handleChangeNewTodoName' | 'handleAddTodo' | 'newTodoName' | 'error'
>;

export const TodoAddRow: React.FC<Props> = ({
  handleAddTodo,
  handleChangeNewTodoName,
  error,
  newTodoName,
}) => {
  return (
    <div>
      <fieldset>
        <legend>add todo here</legend>
        <Input
          type="text"
          value={newTodoName}
          onChange={handleChangeNewTodoName}
          placeholder="new todo name"
        />
        <Button onClick={handleAddTodo}>Add todo</Button>
      </fieldset>
      {error.length > 0 && <span>{error}</span>}
    </div>
  );
};

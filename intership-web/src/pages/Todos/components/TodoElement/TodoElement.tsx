import React from 'react';

type Props = {
  name: string;
  isCompleted: boolean;
  toggleStatus: () => void;
};

export const TodoElement: React.FC<Props> = ({ name, isCompleted, toggleStatus }) => {
  return (
    <div>
      <div>{name}</div>
      <input type="checkbox" checked={isCompleted} onClick={toggleStatus} />
    </div>
  );
};

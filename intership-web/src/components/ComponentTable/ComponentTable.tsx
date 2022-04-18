import React from 'react';

import { IOrganization } from 'src/models/organizations/IOrganization';
import { IDivision } from 'src/models/divisions/IDivision';
import { IEmployee } from 'src/models/employee/IEmployee';

import { useComponentTable } from './hooks/useComponentTable';

import { ReactComponent as MoreIcon } from './icons/more.svg';
import { ReactComponent as ChangeIcon } from './icons/change.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';

import s from './componentTable.module.scss';

type Props = {
  componentName: string
  component: Array<IOrganization | IDivision | IEmployee>,
};

export const ComponentTable: React.FC<Props> = ({ componentName, component }) => {
  const { handleNavigate, handleChangeModal, handleDeleteModal } = useComponentTable();

  const keys = Object.keys(component[0]);

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          {keys.map((item) => (
            <th key={item} className={s.th}>{item}</th>
          ))}
          <th className={s.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {component.map((obj) => (
          <tr key={obj.id} className={s.tr}>
            {keys.map((item) => (
              <td key={item} className={s.td}>{obj[item]}</td>
            ))}
            <td className={s.td}>
              {componentName !== 'Employee' &&
                <a 
                  onClick={() => handleNavigate(componentName, obj)} 
                  onKeyDown={() => handleNavigate(componentName, obj)}
                  role='button' 
                  tabIndex={0}
                  className={s.action}>
                    <MoreIcon className={s.moreIcon}/>
                </a>
              }
              <a 
                onClick={() => handleChangeModal(componentName, obj.id)} 
                onKeyDown={() => handleChangeModal(componentName, obj.id)} 
                role='button' 
                tabIndex={0}
                className={s.action}>
                  <ChangeIcon className={s.changeIcon}/>
              </a>
              <a 
                onClick={() => handleDeleteModal(componentName, obj.id)} 
                onKeyDown={() => handleDeleteModal(componentName, obj.id)} 
                role='button' 
                tabIndex={0}
                className={s.action}>
                  <DeleteIcon className={s.deleteIcon}/>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
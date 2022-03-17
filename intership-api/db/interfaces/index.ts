export interface IUser {
  login: string;
  password: string;
}
// Организации
export interface IOrganization {
  id: number;
  name: string;
  address: string;
  INN: number;
}
// Подразделение
export interface IDivision {
  id: number;
  id_organization: number;
  name: string;
  phone: number;
}

// Сотрудник
export interface IEmployee {
  id: number;
  id_division: number;
  FIO: string;
  address: string;
  position: string;
}

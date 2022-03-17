import * as lowDb from 'lowdb';
import * as FyleSync from 'lowdb/adapters/FileSync';
import lodashId from "lodash-id";
import * as dbInterface from './interfaces';

const db = lowDb(new FyleSync('./db/db.json'));

export class DbModel {
  public static async setDefaults() {
    let result = await db
      .defaults({
        user: { login: 'user', password: 123 },
        organization: [],
        division: [],
        employee: []
      })
      .write();
    return result;
  }
  public static async getUser() {
    const users = await db.get('user').value();
    return users;
  }

  public static async getOganization() {
    let result = await db.get('organization');
    return result;
  }
  private static async getId(type: string) {
    const esence = await db.get(type).value();
    return esence.length + 1;
  }
  public static async addOrganization(data: dbInterface.IOrganization) {
    const id = await this.getId('organization');
    let callback = await db
      .get('organization')
      .push({
        id: id,
        name: data.name,
        address: data.address,
        INN: data.INN
      })
      .write();
    return callback;
  }

  public static async getDivisionById(id: number) {
    let result = await db
      .get('division')
      .filter({ id_organization: id })
      .value();
    return result;
  }

  public static async addDivision(data: dbInterface.IDivision) {
    const id = await this.getId('division');
    let callback = await db
      .get('division')
      .push({
        id: id,
        id_organization: data.id_organization,
        name: data.name,
        phone: data.phone
      })
      .write();
    return callback;
  }

  public static async getEmployeeById(id: number) {
    let result = await db
      .get('employee')
      .filter({ id_division: id })
      .value();
    return result;
  }

  public static async addEmployee(data: dbInterface.IEmployee) {
    const id = await this.getId('employee');
    let callback = await db
      .get('employee')
      .push({
        id: id,
        id_division: data.id_division,
        FIO: data.FIO,
        address: data.address,
        position: data.position
      })
      .write();
    return callback;
  }

  public static async deleteEsense(id: number, type: string) {
    let deleted = await db
      .get(type)
      .remove({ id: id })
      .write();
    return deleted;
  }

  public static async editEsense(id: number, type: string, data: any) {
    let edited = await db
      .get(type)
      .find({ id: id })
      .assign(data)
      .write();
    return edited;
  }
}

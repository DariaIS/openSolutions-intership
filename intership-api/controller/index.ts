import { Request, Response } from "express";
import * as Formidable from "formidable";
import { DbModel } from "../db/connect";

export const Controller = {
  get: {
    getOrganization: async (req: Request, res: Response) => {
      let allOrganization = await DbModel.getOganization();
      res.json(allOrganization);
    },
    getDivisionById: async (req: Request, res: Response) => {
      let id = Number(req.query.id);
      let division = await DbModel.getDivisionById(id);
      if (division) {
        res.json(division);
      } else {
        res.json({ error: "Not found division in organization" });
      }
    },
    getEmployeeById: async (req: Request, res: Response) => {
      let id = Number(req.query.id);
      let employee = await DbModel.getEmployeeById(id);
      if (employee) {
        res.json(employee);
      } else {
        res.json({ error: "Not found employee in division" });
      }
    }
  },
  post: {
    authorize: async (req: Request, res: Response) => {
      let user = await DbModel.getUser();
      let form = new Formidable.IncomingForm();
      form.parse(req, (err, fields: any) => {
        let { login, password } = fields.loginData;
        if (login === user.login && password === user.password) {
          res.json({ isLogin: true });
        } else {
          res.json({ isLogin: false });
        }
      });
    },
    CreateOrganization: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        let { name, address, INN } = fields;
        let callback = await DbModel.addOrganization({
          id: 111,
          name,
          address,
          INN: Number.parseInt(INN, 10)
        });
        console.log(name);
        if (callback) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    },
    CreateDivision: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        let callback = await DbModel.addDivision({
          id: 111,
          //...fields,
          name: fields.name,
          phone: fields.phone,
          id_organization: Number.parseInt(fields.id_organization, 10)
        });
        if (callback) {
          res.json({ success: true });
        }
      });
    },
    CreateEmployee: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        let callback = await DbModel.addEmployee({
          id: 111,
          ...fields,
          id_division: Number.parseInt(fields.id_division, 10)
        });
        if (callback) {
          res.json({ success: true });
        }
      });
    }
  },

  delete: {
    DeleteOrganization: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // let id = Number(fields.id);
        let id = Number(req.query.id);
        console.log(id);
        let deleted = await DbModel.deleteEsense(id, "organization");
        console.log(deleted);
        if (deleted) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    },
    DeleteDivision: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // let id = Number(fields.id);
        let id = Number(req.query.id);
        console.log(id);
        let deleted = await DbModel.deleteEsense(id, "division");
        console.log(deleted);
        if (deleted) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    },
    DeleteEmployee: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // let id = Number(fields.id);
        let id = Number(req.query.id);
        console.log(id);
        let deleted = await DbModel.deleteEsense(id, "employee");
        console.log(deleted);
        if (deleted) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    }
  },
  put: {
    editOrganization: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // const id = parseInt(fields.id, 10);
        let id = Number(req.query.id);
        let edited = await DbModel.editEsense(id, "organization", {
          name: fields.name,
          address: fields.address,
          INN: fields.INN
        });
        if (edited) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    },
    editDivision: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // const id = parseInt(fields.id, 10);
        let id = Number(req.query.id);
        let edited = await DbModel.editEsense(id, "division", {
          name: fields.name,
          phone: fields.phone
        });
        if (edited) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    },
    editEmployee: async (req: Request, res: Response) => {
      let form = new Formidable.IncomingForm();
      form.parse(req, async (err, fields: any) => {
        // const id = parseInt(fields.id, 10);
        let id = Number(req.query.id);
        let edited = await DbModel.editEsense(id, "employee", {
          FIO: fields.FIO,
          address: fields.address,
          position: fields.position
        });
        if (edited) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      });
    }
  }
};

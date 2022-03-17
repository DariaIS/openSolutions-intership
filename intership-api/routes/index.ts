import * as express from 'express';
import { Controller } from '../controller';

const routes = express.Router();

routes.get('/organization', Controller.get.getOrganization);
routes.get('/division', Controller.get.getDivisionById);
routes.get('/employee', Controller.get.getEmployeeById);

routes.post('/authorize', Controller.post.authorize);

routes.post('/organization', Controller.post.CreateOrganization);
routes.post('/division', Controller.post.CreateDivision);
routes.post('/employee', Controller.post.CreateEmployee);

routes.delete('/organization', Controller.delete.DeleteOrganization);
routes.delete('/division', Controller.delete.DeleteDivision);
routes.delete('/employee', Controller.delete.DeleteEmployee);

routes.put('/organization', Controller.put.editOrganization);
routes.put('/division', Controller.put.editDivision);
routes.put('/employee', Controller.put.editEmployee);

export default routes;

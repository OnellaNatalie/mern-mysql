import express from 'express';
const Router = express.Router();
import { adminAuthMiddleware } from '../middleware/adminAuthMiddleware.mjs';

import {
  UserRegister,
  UserLogin,
  AdminRegister,
  AdminLogin,
} from '../Http/Controllers/Auth/AuthController.mjs';

Router.post('/user/register', UserRegister);
Router.post('/user/login', UserLogin);
Router.post('/admin/register', AdminRegister);
Router.post('/admin/login', AdminLogin);

Router.use(adminAuthMiddleware);

export default Router;

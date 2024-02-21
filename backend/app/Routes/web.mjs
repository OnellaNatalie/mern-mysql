// web.mjs
import express from 'express';
const Router = express.Router();
import { adminAuthMiddleware } from '../Http/Middleware/adminAuthMiddleware.mjs';
import { userAuthMiddleware } from '../Http/Middleware/userAuthMiddleware.mjs';

import {
  UserRegister,
  UserLogin,
  AdminRegister,
  AdminLogin,
} from '../Http/Controllers/Auth/AuthController.mjs';

import { Index, UserGetById } from '../Http/Controllers/User/UserController.mjs';

// Public routes
Router.post('/user/register', UserRegister);
Router.post('/user/login', UserLogin);
Router.post('/admin/register', AdminRegister);
Router.post('/admin/login', AdminLogin);
Router.get('/index', Index);
Router.get('/:id', UserGetById);
// User routes
Router.use(userAuthMiddleware);


// Admin routes
Router.use(adminAuthMiddleware);

export default Router;

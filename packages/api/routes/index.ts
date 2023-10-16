import { Hono } from 'hono';
import UserController from '../controllers/user.controller';

const app = new Hono();

const userController = new UserController();

app.get('/login', userController.login);
app.get('/login/callback', userController.callback);

export default app;

import { Hono } from 'hono';
import UserController from '../controllers/user.controller';
import StatsController from '../controllers/stats.controller'

const app = new Hono();

const userController = new UserController();
const statsController = new StatsController();

app.get('/login', userController.login);
app.get('/login/callback', userController.callback);
app.get('/stats/:username', statsController.stats);

export default app;

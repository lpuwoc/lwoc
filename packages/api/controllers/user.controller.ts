import { Context } from "hono";
import UserService from "../services/user.service";

export default class UserController extends UserService {
    public login = async (ctx: Context) => {
        const loginURL = this.getLoginURL();
        return ctx.redirect(loginURL);
    }

    public callback = async (ctx: Context) => {
        const { code } = ctx.req.query();
        const token = await this.getAccessToken(code);
        return ctx.redirect(`${process.env.FRONTEND_URL}/login/callback?access_token=${token}`);
    }
}
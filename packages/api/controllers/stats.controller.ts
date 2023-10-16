import { Context } from "hono";
import axios, { AxiosResponse } from "axios";

export default class StatsController {
    public stats = async (c: Context) => {
        const username: string = c.req.param('username');

        try {
            var userData: AxiosResponse = await axios.get(`https://api.github.com/users/${username}`)
            var userRepos: AxiosResponse = await axios.get(`https://api.github.com/users/${username}/repos`)
        } catch (err: any) {
            if (err.response.status == 404) {
                return c.text('Does the user exist❓️ Check again 🐒', 404)
            } else {
                return c.text('Something went wrong', 500)
            }
        }

        let repos: Array<Object> = []
        userRepos.data.forEach((element: any) => {
            let repo: object = {
                id: element.id,
                name: element.full_name
            }
            repos.push(repo)
        });
        userData.data.repos = repos

        return c.json(userData.data)
    }
}
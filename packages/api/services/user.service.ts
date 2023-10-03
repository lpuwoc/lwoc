import axios from 'axios';

export interface IAccessToken {
    access_token: string;
    token_type: string;
    scope: string;
}

export default class UserService {
    public getLoginURL = () => {
        const loginURL = new URL('https://github.com/login/oauth/authorize?' + new URLSearchParams({
            client_id: process.env.GITHUB_CLIENT_ID,
            redirect_uri: process.env.GITHUB_REDIRECT_URI,
            scope: 'repo user'
        }));

        return loginURL.toString();
    }

    public getAccessToken = async (code: string) => {
        const tokenData : {
            data: IAccessToken
        } = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: process.env.GITHUB_REDIRECT_URI
        }, {
            headers: {
                accept: 'application/json'
            }
        });

        return tokenData.data.access_token;
    }
}
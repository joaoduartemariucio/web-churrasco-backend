const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const { use } = require('../routes');

module.exports = {

    async index(request, response) {
        const users = await connection('login_user').select('*');
        return response.json(users);
    },

    async create(request, response) {
        const { name, email, password } = request.body;

        const users = await connection('login_user').where('email', email).select("*");

        if (users.length) {
            return response.status(400).json({ error: "O e-mail informado já está cadastrado" });
        }

        await connection('login_user').insert({
            name,
            email,
            password
        })

        return response.json({ name, email, password });
    },

    async session(request, response) {
        const { email, password } = request.body;

        const data_expira_token = new Date();
        data_expira_token.setDate(new Date().getDate() + 1);

        const data_expira_refresh_token = new Date();
        data_expira_refresh_token.setDate(new Date().getDate() + 7);

        const token = jwt.sign({
            exp: Math.floor(data_expira_token / 1000) + (60 * 60),
            data: 'foobar'
        }, 'secret');

        const refresh_token = jwt.sign({
            exp: Math.floor(data_expira_refresh_token / 1000) + (60 * 60),
            data: 'foobar'
        }, 'secret');

        const users = await connection('login_user').where('email', email).select('*');
        const user = users[0]

        const login_id = user.id;

        await connection('login_user_session').insert({
            login_id,
            token,
            data_expira_token,
            refresh_token,
            data_expira_refresh_token
        })

        const session = { token, data_expira_token, refresh_token, data_expira_refresh_token };

        return response.json({ user, session });
    }
};
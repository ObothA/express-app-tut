const DB = require("../services/DB");

async function getAllUsers(req, res, next) {
    const users = await DB('users').select('id', 'name');
    return res.json(users);
}

async function getUser(req, res, next) {
    const user = await DB('users')
        .select('id', 'name').
        where('id', req.params.id);
    return res.json(user);
}

module.exports = { getAllUsers, getUser };

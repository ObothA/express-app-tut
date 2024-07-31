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

async function createUser(req, res, next) {
    const { name } = req.body;
    const inserted = await DB('users').insert({ name }, ['id', 'name']);
    console.log(inserted);
    return res.json(inserted);
}

module.exports = { getAllUsers, getUser, createUser };

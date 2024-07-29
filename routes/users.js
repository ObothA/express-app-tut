var express = require('express');
var router = express.Router();
const DB =  require('../services/DB');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', async function(req, res, next) {
  const users = await DB('users').select('id', 'name');
  return res.json(users);
});

module.exports = router;

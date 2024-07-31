var express = require('express');
var router = express.Router();
const DB =  require('../services/DB');
const {getAllUsers, getUser, createUser} = require("../controllers/users");

/* GET users listing. */
// router.get('/', async function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);

module.exports = router;

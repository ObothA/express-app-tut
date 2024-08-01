var express = require('express');
var router = express.Router();


router.use('/users', require('./users'));
router.use('/address',  require('./address'));

router.get('/', (req, res) => {
  res.send('Welcome to new API');
});

module.exports = router;

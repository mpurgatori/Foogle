const express = require('express');
const router = express.Router();
// const usersRoute = require('./users');

router.get('/', function(req, res) {
  res.send('API HOME');
})

// router.use('/users', usersRoute);  example


module.exports = router;

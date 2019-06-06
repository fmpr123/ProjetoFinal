var express = require('express');
var router = express.Router();

const userController=require('../controllers/userControllers');

/* GET home page. */
router.get('/users', 
  userController.show_users
);

module.exports = router;

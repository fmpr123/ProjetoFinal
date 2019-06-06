var express = require('express');
var router = express.Router();

const userController=require('../controllers/userControllers');

/* GET home page. */
router.get('/', 
  userController.index
);

module.exports = router;

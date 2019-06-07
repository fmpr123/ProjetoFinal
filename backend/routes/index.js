var express = require('express');
var router = express.Router();

const userController=require('../controllers/userControllers');

/* GET home page. */
router.get('/users', 
  userController.show_users
);

router.post('/addusers', 
  userController.add_users
);

router.post('/',
  userController.login
);

router.post('/post',
  userController.add_post
);

module.exports = router;

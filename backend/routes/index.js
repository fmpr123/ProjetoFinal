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

router.get('/posts',
  userController.show_post
);

router.get('/showgames',
  userController.show_games
);

router.post('/post/:post_id/comment',
  userController.comment
);

router.post('/post/:post_id/like',
  userController.like
);

module.exports = router;

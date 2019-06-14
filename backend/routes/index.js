var express = require('express');
var router = express.Router();

const userController=require('../controllers/userControllers');

/* GET home page. */
router.get('/users', 
  userController.show_users
);

router.get('/user', 
  userController.show_user
);

router.patch('/addgame', 
  userController.add_game
);

router.get('/posts', 
  userController.show_posts
);

router.patch('/adduser', 
  userController.add_user
);

router.post('/',
  userController.login
);

router.patch('/addpost',
  userController.add_post
);

router.get('/maindata',
  userController.main_data
);

router.get('/showgames',
  userController.show_games
);

router.patch('/update_users',
  userController.update_users
);

router.post('/post/:post_id/comment',
  userController.add_comment
);

router.patch('/like',
  userController.like
);

router.get('/comments',
  userController.show_comment
);

router.get('/deleteuser',
  userController.delete_user
);

router.get('/deletecomment',
  userController.delete_comment
);

router.patch('/deletepost',
  userController.delete_post
);

module.exports = router;

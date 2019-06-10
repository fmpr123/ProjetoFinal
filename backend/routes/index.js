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

router.post('/addpost',
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

router.post('/like',
  userController.like
);

router.get('/comments',
  userController.show_comment
);

module.exports = router;

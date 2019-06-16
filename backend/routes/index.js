var express = require('express');
var router = express.Router();

const userController=require('../controllers/userControllers');

//-----------


module.exports = function (app, passport) {
  app.get('/', function (req, res) {
      res.render('login.vue');
  });
  app.get('/login', function (req, res) {
      //render the page and pass in any flash data if it exists
      res.render('login.vue', { message: req.flash('loginMessage') });
  });
  app.post('/login', passport.authenticate('local-login', {
      successRedirect: '/profile', // redirect to the secure profile
      failureRedirect: '/login', // redirect back to the signup page
      failureFlash: true // allow flash messages
  }))
  app.get('/signup', function (req, res) {
      res.render('signup.vue', { message: req.flash('loginMessage') })
  });
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true
  }))
  app.get('/profile', isLoggedIn, function(req, res) {
      res.render('profile.ejs', {
          user: req.user
      })
  });
  app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}


//-------------

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

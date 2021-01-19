const express = require('express');
const User = require('../models/user');

const router = express.Router();

// GET / 라우터
// router.get('/', (req, res) => {
//   console.log('/ 라우트 실행');

//   res.render('index.pug', { title: 'Login' });

// });

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('index', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


module.exports = router;
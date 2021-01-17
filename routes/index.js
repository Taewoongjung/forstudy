const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  console.log('/ 라우트 실행');

  res.render('index.pug', { title: 'Login' });

});

module.exports = router;
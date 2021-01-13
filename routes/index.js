const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.route('/user')
  .get((req, res) => {
    res.render('index2', { titles : req.query.name_user});
  })


module.exports = router;

router.route('/abc')
  .get((req, res) => {
    res.send('GET /abc');
  })
  .post((req, res) => {
    res.send('POST /abc');
  });

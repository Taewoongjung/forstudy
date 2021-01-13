const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    console.log("id : "+ req.body.id);
    if(req.body.rememberId === "checked"){
      console.log("아이디 저장 체크");

      res.cookie('Cookie', process.env.COOKIE_SECRET);

      console.log(req.cookies);
    }
    res.render('index2', { me : req.query.name_user});
  });

// router.get('/', (req, res) => {
//     req.clearCookie('myCookie', {path: '/'});
// });

module.exports = router;
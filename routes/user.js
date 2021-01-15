const express = require('express');

const router = express.Router();

// POST /user 라우터
router.post('/', (req, res) => {

    console.log('id : '+ req.body.name_user);
    console.log('psw : '+ req.body.name_psw);
    
    if(req.body.rememberId === "checked"){
      console.log("아이디 저장 체크");
  
      res.cookie('Cookie', process.env.COOKIE_SECRET);
  
      console.log(req.cookies);
    }

    res.render('index2',{me: req.body.name_user});
  });


module.exports = router;
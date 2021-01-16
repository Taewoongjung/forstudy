const express = require('express');

const router = express.Router();

// POST /user 라우터
router.post('/',(req, res) => {

    var paramID = req.body.name_user;
    var psw = req.body.name_psw;

    req.session.user = {
      id: paramID,
      pw: psw,
      authorized: true
    };

    console.log('id : '+ paramID);
    console.log('psw : '+ psw);
    
    if(req.body.rememberId === "checked"){
      console.log("아이디 저장 체크");
      res.cookie('Cookie', process.env.COOKIE_SECRET);
    }
    
    if(req.cookies){
      console.log(req.cookies);
      console.log(req.session);
    }

    res.render('index2', {me: req.body.name_user});

  });

module.exports = router;
const express = require('express');

const router = express.Router();

// POST /user 라우터
router.post('/', (req, res) => {

    var paramID = req.body.user_id;
    var psw = req.body.user_psw;

    req.session.user = {
      id: paramID,
      pw: psw,
      authorized: true
    };

    console.log('id : '+ paramID);
    console.log('psw : '+ psw);
    
    if(req.body.rememberId === "checked"){
      console.log("아이디 저장 체크");
    }
    
    res.render('index2', {me: paramID});
  });

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        psw: req.body.psw,
        save: req.body.save,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


module.exports = router;
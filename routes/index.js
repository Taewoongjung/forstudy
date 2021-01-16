const express = require('express');

const router = express.Router();

//// GET / 라우터
//router.get('/', (req, res) => {
//  console.log('/ 라우트 실행');
//
//  if(req.session.user){
//    console.log('이미 로그인 되어 있음');
//  } else{
//    res.render('index.pug', { title: 'Login' });
//  }
//});
//
//router.post('/', (req, res) => {  //세션 설정해서 찍어보기
//  var paramID = req.body.name_user;
//  var psw = req.body.name_psw;
//
//  req,session.user = {
//    id: paramID,
//    pw: psw,
//    name: 'UsersNames!!',
//    authorized: true
//  };
//
//  console.log(paramID);
//  console.log(pw);
//})

router.route('/')
  .get((req, res) => {
    console.log('/ 라우트 실행');

    if(req.session.user){
        console.log('이미 로그인 되어 있음');
      } else{
        res.render('index.pug', { title: 'Login' });
      }
  })

  .post((req, res) => {
    var paramID = req.body.name_user;
    var psw = req.body.name_psw;
    req,session.user = {
      id: paramID,
      pw: psw,
      name: 'UsersNames!!',
      authorized: true
    };
    console.log(paramID);
    console.log(pw);
  });

module.exports = router;
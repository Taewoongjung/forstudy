const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    console.log('/sign 라우트 실행');
    res.render('signin', {title: '회원가입'});

    var ID = req.body.user_id;
    var ps = req.body.user_psw;

    console.log("---회원가입 완료---")
    console.log("아이디 : " + ID);
    console.log("비밀번호 : " + ps);
});

module.exports = router;
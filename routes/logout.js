const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    console.log('"logout"의 / 라우트 실행');
    
    if (req.cookies.user) {
        console.log('로그아웃 처리');
        req.cookies.destroy(
            function (err) {
                if (err){
                    console.log('세션 삭제시 에러');
                    return;
                }
            console.log('세션 삭제 성공');
            res.redirect('/');
            }
        );
    } else{
        console.log('로그인 안되어 있음');
        res.redirtect('/');
    }
});

module.exports = router;
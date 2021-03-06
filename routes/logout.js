const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('"logout"의 / 라우트 실행');
    console.log(req.session);
    if (req.session && req.session.user) {
        console.log('로그아웃 처리');
        req.session.destroy(
            function (err) {
                if (err){
                    console.log('세션 삭제시 에러');
                    return;
                }
            res.clearCookie('cookie-session');
            console.log(req.session);
            console.log(req.cookies);
            console.log('세션, 쿠키 삭제 성공');
            res.redirect("/");
            }
        );
    }
});

module.exports = router;

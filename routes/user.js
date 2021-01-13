const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/user', (req, res) => {
    res.cookie('myCookie', process.env.COOKIE_SECRET);
//    console.log(req.sessionID);
});

module.exports = router;
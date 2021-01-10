const express = require('express');

const router = express.Router();

// GET /user 라우터
router.post('/', (req, res) => {
    res.cookie('myCookie', process.env.COOKIE_SECRET);
    console.log(req.sessionID);

    res.send('Hello '+ req.body.name_user);
});

module.exports = router;

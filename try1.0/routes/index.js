var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/register', function (req, res, next) {
    res.render('blank', {title: 'register'});
});

router.get('/go', function (req, res, next) {
    res.render('go', {title: '登录'});
});

router.get('*', function (req, res, next) {
    res.render('error', {message: '404!404!!'});
})

module.exports = router;

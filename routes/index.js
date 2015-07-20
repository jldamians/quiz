var express = require('express');
var router = express.Router();

var quizCtrl = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizCtrl.question);

router.get('/quizes/answer', quizCtrl.answer);

module.exports = router;

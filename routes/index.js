var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


  res.render('index', { title: 'Express', result:0 });

});

function triangle(){

}

function sum(a, b) {
  return a + b;
}

module.exports = router;

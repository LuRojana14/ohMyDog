const express = require('express');
const router = express.Router();

/* GET home private page. */
router.get('/homeprivate', function(req, res, next) {
  res.render('homeprivate', { title: 'Express' });
});

module.exports = router;

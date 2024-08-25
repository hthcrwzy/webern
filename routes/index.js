// Copyright © 2024 Yamizo (aka. hthcrwzy)
// This program is available under AGPL v3;
// please look at the LICENSE file.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/listings');
  }
  res.render('index', { title: 'NodeFlix - Open Source Netflix Clone' });
});

module.exports = router;

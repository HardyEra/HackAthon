const express = require('express');
const {authenticate} = require('../middlewares/authMiddlewares');
const {authorizeRoles} = require('../middlewares/authMiddlewares');
const router = express.Router();

// Manager Route
router.get('/manager', authenticate, authorizeRoles('manager'), (req, res) => {
  res.send(`Hi! ${req.user.username}, Welcome Manager`);
});

// Supervisor Route
router.get('/supervisor', authenticate, authorizeRoles('supervisor'), (req, res) => {
  res.send(`Hi! ${req.user.username}, Welcome Supervisor`);
});

// Worker Route
router.get('/worker', authenticate, authorizeRoles('worker'), (req, res) => {
  res.send(`Hi! ${req.user.username}, Welcome Worker`);
});

module.exports = router;

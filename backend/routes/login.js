const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {getUser, getAllUsers} = require('../db/controllers')
require('dotenv').config();

router.use(express.json());

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.send(JSON.stringify(users));
})

router.post('/', async (req, res) => {
  const {username, password} = req.body;
  const user = await getUser(username);

  if (user.password !== password){
    return res.status(403).json({
      error: "Invalid Login"
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.MY_SECRET, {expiresIn: '10m'});

  res.cookie("token", token, {
    httpOnly: true
  });

  //res.redirect('/welcome');
  res.status(200).send('Token granted');
})

module.exports = router;
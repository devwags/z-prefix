const express = require('express');
const cors = require('cors');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {getUser, getAllUsers} = require('../db/controllers')
require('dotenv').config();

router.use(express.json());
router.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

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

  res.cookie("token", JSON.stringify(token), {
    httpOnly: true
  });

  //res.redirect('/welcome');
  res.status(200).send({message:'Token granted'});
})

module.exports = router;
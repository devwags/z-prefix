const express = require('express');
const router = express.Router();
const {getAllUsers, addUser} = require('../db/controllers')

router.use(express.json());

router.get('/', async (req, res)=>{
  const response = await getAllUsers();
  res.status(200).send(JSON.stringify(response));
})

router.post('/', async (req, res)=>{
  const newUser = req.body;
  try {
    addUser(newUser);
    res.status(201).send("User created!");
  } catch (e) {
    console.log(e.message);
  }
})

module.exports = router;
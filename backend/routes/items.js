const express = require('express');
const cors = require('cors');
const router = express.Router();
const {getAllItems, addItem} = require('../db/controllers');

router.use(express.json());
router.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

router.get('/', async (req, res)=>{
  const response = await getAllItems();
  res.status(200).send(JSON.stringify(response));
})

router.post('/', async (req, res)=>{
  const userId = req.body;
  const {item_name, description, quantity} = req.body;
  try {
    addItem(userId, item_name, description, quantity);
    res.status(201).send('Item added!')
  } catch (e) {
    console.log(e.message);
  }
})

module.exports = router;
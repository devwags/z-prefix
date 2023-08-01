const express = require('express');
const cors = require('cors');
const router = express.Router();
const cookieJwtAuth = require('../middleware/cookieJwtAuth')
const {getAllItems, addItem, getItem} = require('../db/controllers');

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

router.get('/:itemId', async (req, res)=>{
  const {itemId} = req.params;
  try {
    const item = await getItem(itemId);
    res.status(200).send(JSON.stringify(item))
  } catch (e) {
    console.log(e.message);
  }
})

router.get('/myItems', cookieJwtAuth, async (req, res)=>{
  const {user} = req.user;
  console.log(`user is: ${user}`)
  const result = await getItemsPerUser(user.id);
  console.log(`results are: ${result}`)
  res.status(200).send(JSON.stringify(result))
})

module.exports = router;
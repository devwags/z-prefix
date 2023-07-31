const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const loginRoute = require('./routes/login');
const itemsRoute = require('./routes/items');
const usersRoute = require('./routes/users');

//Secret for jwt authentication
app.use('/login', loginRoute);
app.use('/items', itemsRoute);
app.use('/users', usersRoute);
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

app.get('/', (req, res) => {
  res.status(200).send(`Ey, globe!`)
})

app.post('/', (req, res) => {
  res.status(200).send('Sent');
  console.log(req.body)
})

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}.`)
})
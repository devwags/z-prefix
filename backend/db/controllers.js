const { response } = require('express');
const knex = require('./dbConnection');

const getUser = async (user_name) => {
  const user = await knex('users').first('*').where({username: user_name})
  return user;
}

const getAllUsers = async () => {
  const users = await knex('users').select('*');
  return users.map((user)=>{
    delete user.password;
    return user;
  })
}

const addUser = async ({first_name, last_name, username, password}) => {
  const result = await knex('users').insert({
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: password
  })
  console.log(result);
  return result;
}

const addItem = async ({user_id, item_name, description, quantity}) => {
  const result = await knex('items').insert({
    user_id: user_id,
    item_name: item_name,
    description: description,
    quantity: quantity
  })
  console.log(result)
  return result;
}

const getAllItems = () => {
  return knex('items').select('*');
}

module.exports = {getUser, getAllUsers, getAllItems, addUser, addItem}
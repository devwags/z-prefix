/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {user_id: 1, item_name: 'axe', description: `for pesky cherry trees`, quantity: 1},
    {user_id: 1, item_name: 'flag', description: `all the better to imperialize with`, quantity: 1},
    {user_id: 1, item_name: 'long_desc', description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.`, quantity: 1},
    {user_id: 2, item_name: 'microphone', description: `loud noises`, quantity: 1},
    {user_id: 2, item_name: 'motorcycle', description: `hypermasculine wheely-boi`, quantity: 1},
    {user_id: 2, item_name: 'big_desc', description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.`, quantity: 1},
    {user_id: 3, item_name: 'guitar', description: `it shreds, you say?`, quantity: 1},
    {user_id: 3, item_name: 'saxoboom', description: `ain't nothin' to funk with`, quantity: 1},
    {user_id: 3, item_name: 'yuge_desc', description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.`, quantity: 1}
  ]);
};
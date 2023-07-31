/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'George', last_name: 'Washington', username: 'prez_1', password: 'pwd'},
    {first_name: 'Rob', last_name: 'Halford', username: 'metal_god', password: 'pwd'},
    {first_name: 'Jack', last_name: 'Black', username: 'ten_d', password: 'pwd'}
  ]);
};

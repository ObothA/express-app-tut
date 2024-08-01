/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('addresses').del()
  await knex('addresses').insert([
    {
      id: 1,
      street: "first",
      suburb: "sub",
    }
  ]);
};

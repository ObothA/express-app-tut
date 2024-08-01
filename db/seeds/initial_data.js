const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('Password', salt);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert(
            [
              {
                id: 1,
                name: 'admin',
                gender: 'male',
                email: 'admin@gmail.io',
                DOB: "2002-06-30",
                contact_number: '0987654321',
                role: 'admin',
                password: hash,
                address_id: 1,
              }
            ]);
      });
};

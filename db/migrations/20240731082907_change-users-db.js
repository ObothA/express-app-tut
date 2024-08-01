/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.dropTable('users');
    // return knex.schema.createTable("users", (table) => {
    //     table.increments("id").primary().unique()
    //     table.string('name', 256).notNullable();
    // })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

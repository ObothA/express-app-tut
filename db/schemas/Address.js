const addressSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('street').notNullable().unique()
    table.string('suburb').notNullable()
    table.timestamps(true, true)
}

module.exports = addressSchema;

exports.up = function(knex) {
  return knex.schema.createTable("gallery", table => {
    table.increments();
    table.string("image_url").notNullable();
    table.text("description");
    table
      .integer("user_id")
      .references("users.id")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("gallery");
};

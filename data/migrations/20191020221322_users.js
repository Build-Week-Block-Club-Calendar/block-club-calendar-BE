// Complete

exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name', 128);
        table.string('email', 128);
        table.string('username', 128)
            .notNullable()
            .unique();
        table.string('password', 128)
            .notNullable();
        table.string('organizations', 512);
        table.string('avatarUrl', 512);
        table.string('role', 128);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};

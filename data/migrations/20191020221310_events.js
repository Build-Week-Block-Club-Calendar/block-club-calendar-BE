// Complete

exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.increments();
        table.string('Title', 128).notNullable();
        table.string('Date', 128).notNullable();
        table.string('Time', 128).notNullable();
        table.string('Location', 128).notNullable();
        table.string('Description', 512);
        table.string('Image', 512);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('events');
};

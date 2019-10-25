// Complete

exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.increments();
        table.string('Title', 128).notNullable();
        table.string('Date', 128).notNullable();
        table.string('Address', 128).notNullable();
        table.string('Location', 128).notNullable();
        table.string('Description', 512);
        table.string('Link', 512);
        table.string('Image', 512)
            .defaultTo('https://detroitmi.gov/themes/custom/detroitmi/logo.png');
        table.integer('organizer_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.boolean('approved')
            .defaultTo(0);
    })
    .createTable('event_confirmations', table => {
        table.increments();

        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.integer('event_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('events')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('events');
};

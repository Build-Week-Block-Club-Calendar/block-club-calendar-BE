// Complete

const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findByIdOrganizer,
    getAllEvents,
    getEventsByOrganizer,
    insert,
    remove,
    update,
};

function findById(id) {
    return db('events')
        .where('events.id', id)
        .first();
};

function findByIdOrganizer(id) {
    return db('events')
        .where('events.id', id)
        .select('events.id', 'Title', 'Date', 'Address', 'Location', 'Description', 'Link', 'Image', 'username as Organizer', 'approved')
        .join('users', 'events.organizer_id', '=', 'users.id')
        .first();
};

function getAllEvents() {
    return db('events')
        .select('events.id', 'Title', 'Date', 'Address', 'Location', 'Description', 'Link', 'Image', 'username as Organizer', 'approved')
        .join('users', 'events.organizer_id', '=', 'users.id');
};

// select id, Title, Date, Time, Location, Description, Link, Image, username Organizer from events e join users u on e.organizer_id = u.id

function getEventsByOrganizer(organizer) {
    return db('events')
        .select('events.id', 'Title', 'Date', 'Address', 'Location', 'Description', 'Link', 'Image', 'username as Organizer', 'approved')
        .join('users', 'events.organizer_id', '=', 'users.id')
        .where('Organizer', organizer);
};

async function insert(event) {
    return await db('events').insert(event, 'id');
};

function remove(id) {
    return db('events')
        .where({ id })
        .delete();
};

function update(id, changes) {
    return db('events')
        .where({ id })
        .update(changes);
};
// WIP

const db = require('../data/dbConfig.js');

module.exports = {
    findById,
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

function getAllEvents() {
    return db('events');
};

function getEventsByOrganizer(organizer) {
    return db('events').join('event_organizers', 'events.id', '=', 'event_organizers.organizer_id')
        .where('organizer_id', organizer)
        .first();
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
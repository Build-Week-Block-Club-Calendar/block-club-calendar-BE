// WIP

const db = require('../data/dbConfig.js');

module.exports = {
    getGoing,
    insert,
};

function getGoing() {
    return db('event_confirmations as ec')
        .select('ec.id', 'users.username as Username', 'users.id as user_id', 'events.Title as Event', 'events.id as event_id')
        .join('users', 'users.id', '=', 'ec.user_id')
        .join('events', 'events.id', '=', 'ec.event_id');
};

async function insert(event) {
    return await db('event_confirmations').insert(event);
};
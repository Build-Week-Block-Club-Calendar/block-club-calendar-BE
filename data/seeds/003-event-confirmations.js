// Complete

exports.seed = function(knex) {
  return knex('event_confirmations').truncate()
    .then(function() {
      return knex('event_confirmations').insert([
        { user_id: 1, event_id: 4 },
        { user_id: 2, event_id: 3 },
        { user_id: 3, event_id: 2 },
        { user_id: 4, event_id: 1 },
      ]);
    });
};
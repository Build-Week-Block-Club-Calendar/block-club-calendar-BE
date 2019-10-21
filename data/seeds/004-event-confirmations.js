// Complete

exports.seed = function(knex) {
  return knex('event_confirmations').insert([
    { user_id: 1, event_id: 1 },
    { user_id: 1, event_id: 1 },
    { user_id: 1, event_id: 1 },
  ]);
};
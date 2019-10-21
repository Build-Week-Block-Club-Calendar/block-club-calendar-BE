// Complete

exports.seed = function(knex) {
  return knex('event_organizers').insert([
    { organizer_id: 1 },
    { organizer_id: 1 },
    { organizer_id: 1 },
  ]);
};

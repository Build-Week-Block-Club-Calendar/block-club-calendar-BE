// Complete

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Quinton', password: 'password123'},
        {username: 'Marina', password: 'dopepassword'},
        {username: 'David', password: 'edgypassword'},
        {username: 'Jackson', password: 'betyoucantguessthis'},
        {username: 'Louis', password: 'detroit123'},
        {username: 'Dog', password: 'ihatecats'},
        {username: 'Garfield', password: 'ihatemondays'},
        {username: 'Gandalf', password: 'youshallnotpass'},
        {username: 'User123', password: 'password123'}
      ]);
    });
};

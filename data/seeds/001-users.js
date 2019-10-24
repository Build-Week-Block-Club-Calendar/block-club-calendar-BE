// Complete

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: 'Admin', password: 'admin123', role: 'admin', email: '', name: '', organizations: '', avatarUrl: ''},
        {username: 'Quinton', password: 'quinton123', role: '', email: 'quinton@email.com', name: 'Quinton M', organizations: '', avatarUrl: ''},
        {username: 'Marina', password: 'marina123', role: '', email: '', name: 'Marina B', organizations: 'Lambda', avatarUrl: ''},
        {username: 'David', password: 'david123', role: '', email: '', name: 'David H', organizations: '', avatarUrl: ''},
        {username: 'Jackson', password: 'jackson123', role: '', email: '', name: 'Jackson O', organizations: '', avatarUrl: ''},
        {username: 'Louis', password: 'louis123', role: '', email: '', name: 'Louis G', organizations: '', avatarUrl: ''},
        {username: 'Gandalf', password: 'youshallnotpass', role: '', email: 'coolwizard111@middleearth.gov', name: 'Gandalf the Grey', organizations: 'Middle Earth', avatarUrl: ''},
      ]);
    });
};

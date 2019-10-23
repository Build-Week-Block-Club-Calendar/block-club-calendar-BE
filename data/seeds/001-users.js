// Complete

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Admin', password: 'admin123', role: 'admin', email: '', name: '', organizations: '', avatarUrl: ''},
        {username: 'Quinton', password: 'password123', role: '', email: 'quinton@email.com', name: 'Quinton M', organizations: '', avatarUrl: ''},
        {username: 'Marina', password: 'dopepassword', role: '', email: '', name: 'Marina B', organizations: 'Lambda', avatarUrl: ''},
        {username: 'David', password: 'edgypassword', role: '', email: '', name: 'David H', organizations: '', avatarUrl: ''},
        {username: 'Jackson', password: 'betyoucantguessthis', role: '', email: '', name: 'Jackson O', organizations: '', avatarUrl: ''},
        {username: 'Louis', password: 'detroit123', role: '', email: '', name: 'Louis G', organizations: '', avatarUrl: ''},
        {username: 'Dog', password: 'ihatecats', role: '', email: '', name: 'Dog Dog', organizations: 'Dog Club', avatarUrl: ''},
        {username: 'Garfield', password: 'ihatemondays', role: '', email: 'ilovelasagna@email.com', name: 'Garfield Arbuckle', organizations: '', avatarUrl: ''},
        {username: 'Gandalf', password: 'youshallnotpass', role: '', email: 'coolwizard111@middleearth.gov', name: 'Gandalf the Grey', organizations: 'Middle Earth', avatarUrl: 'selfie.jpg'},
      ]);
    });
};

// Complete

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {Title: 'Party', Date: 'Tomorrow', Time: '5pm', Location: 'Party Center', Description: 'Dope Party', Link: 'google.com', Image: 'image.png'},
        {Title: 'Dance', Date: 'October 23', Time: '9pm', Location: 'Dance Place', Description: '', Link: '', Image: ''},
        {Title: 'Christmas', Date: 'December 25', Time: '12am', Location: 'North Pole', Description: '', Link: 'google.com', Image: ''},
        {Title: 'Birthday Party', Date: 'January 2nd', Time: '12am', Location: 'My house', Description: '', Link: '', Image: 'birthday.jpg'},
      ]);
    });
};

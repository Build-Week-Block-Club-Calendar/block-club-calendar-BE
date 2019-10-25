// Complete

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          Title: "Councilwoman Sheffield's Town Hall",
          Date: "Tue Oct 22 2019 18:00:00 GMT-0400 (Eastern Daylight Time)",
          Location: "",
          Address: "1 Ford Pl., Detroit, MI 48202",
          Description: "Join Council President Pro Tem Sheffield and the City Assessor for an in depth discussion on Neighborhood Enterprise Zones and what they mean to you!",
          Link: "",
          Image: "https://detroitmi.gov/sites/detroitmi.localhost/files/2018-11/Mary-Sheffield.jpg",
          organizer_id: 2
        },
        {
          Title: "Historic North End Alliance Monthly Meeting",
          Date: "Wed Oct 24 2001 18:00:00 GMT-0400 (Eastern Daylight Time)",
          Location: "",
          Address: "8000 Woodward Avenue",
          Description: "Monthly meeting for the HNEA including a property valuation and tax assessment workshop from Alvin Horhn of the City Assessor's Office",
          Link: "",
          Image: "https://i.ibb.co/Vq4vcMf/HNEA.png",
          organizer_id: 3
        },
        {
          Title: "Detroit People's Food Co-op \"Movie Night\"",
          Date: "Fri Oct 25 2019 17:00:00 GMT-0400 (Eastern Daylight Time)",
          Location: "",
          Address: "8000 Woodward Avenue, Detroit, MI",
          Description: "Movie Night on Friday, will be an opportunity to purchase ownership into the Co-op. The Co-op will open on Euclid and Woodward. Membership is $200, and they have a payment plan for $30 down and $34 for 5 months. I'm strongly encouraging Detroiters to buy in and have ownership into the Co-op.",
          Link: "",
          Image: "https://i.ibb.co/2PH5SCj/DBFSN.png",
          organizer_id: 4
        },
        {
          Title: "North End Fall Harvest Fest",
          Date: "Sat Oct 26 2019 11:00:00 GMT-0400 (Eastern Daylight Time)",
          Location: "",
          Address: "2795 E. Grand Blvd, Detroit, MI",
          Description: "Vanguard CDC presents a free vent especially for children 4-12 years old, but all ages are welcome. There will be a Fire Safety Presentation for children and adults.",
          Link: "",
          Image: "https://i.ibb.co/wWJ6SVn/VG-CDC-FHV.png",
          organizer_id: 5
        },
        {
          Title: "Trunk-or-Treat with the Lower North End Block Club",
          Date: "Thu Oct 31 2019 18:00:00 GMT-0400 (Eastern Daylight Time)",
          Location: "",
          Address: "7432 Brush St, Detroit, MI 48202",
          Description: "Bring your friends and family to enjoy a night of fright on the Michigan Urban Farming Initiative's Campus! There will be handy, hot dog roasting, and a Zombie Walk for the kids.",
          Link: "",
          Image: "https://i.ibb.co/hK3St7F/LNE-TOT.png",
          organizer_id: 6
        }
      ]);
    });
};

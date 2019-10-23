// Complete(may delete this file)

// const router = require('express').Router();

// const restricted = require('../auth/authMiddleware.js');
// const Users = require('./userModel.js');
// const checkAdmin = require('../auth/check-admin-middleware.js');

// router.get('/admin', restricted, checkAdmin('admin'), (req, res) => {
//     Users.find()
//         .then(users => {
//             console.log('users:', users)
//             console.log('here:', req.user);
//             res.status(200).json({ loggedInUser: req.username, users });
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         });
// });

// module.exports = router;

// WIP

const router = require('express').Router();

const Admin = require('./adminModel.js');
const restricted = require('../auth/authMiddleware.js');
const checkRole = require('../auth/check-admin-middleware.js');

router.get('/users', restricted, checkRole('admin'), (req, res) => {
    Admin.find()
        .then(users => {
            console.log('users:', users)
            console.log('here:', req.user);
            res.status(200).json({ loggedInUser: req.username, users });
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// The delete is working but the response isn't working. WIP 
router.delete('/:id', restricted, checkRole('admin'), (req, res) => {
    const { id } = req.params;

    Admin.remove(id)
        .then(deleted => {
            res.status(200).json({ message: 'That event was successfully deleted.' });
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be deleted.' });
        });
});

router.put('/:id', restricted, checkRole('admin'), async (req, res) => {
    try {
        const event = await Admin.update(req.params.id, req.body);
        if (event) {
            res.status(200).json({ message: 'That event has been successfully updated.' });
        } else {
            res.status(404).json({ message: 'That event could not be found.' });
        };
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

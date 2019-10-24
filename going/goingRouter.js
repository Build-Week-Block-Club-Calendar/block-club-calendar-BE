// WIP

const router = require('express').Router();

const Going = require('./goingModel.js');
const restricted = require('../auth/authMiddleware.js');

router.get('/', restricted, (req, res) => {
    Going.getGoing()
        .then(going => {
            res.status(200).json(going);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/', restricted, async (req, res) => {
    req.body.user_id = req.user.id;

    await Going.insert(req.body)
        .then(event => {
            res.status(201).json(event);
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be added.' });
        });
});

module.exports = router;

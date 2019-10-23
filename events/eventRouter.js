// Complete

const router = require('express').Router();

const Events = require('./eventModel.js');
const restricted = require('../auth/authMiddleware.js');

router.get('/', (req, res) => {
    Events.getAllEvents()
        .then(events => {
            res.status(200).json(events);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/:organizer', async (req, res) => {
    const { organizer } = req.params;

    try {
        const events = await Events.getEventsByOrganizer(organizer);
        if (events) {
            res.json(events);
        } else {
            res.status(404).json({ message: 'Could not find an event created by that Organizer.' });
        };
    } catch (error) {
        res.status(500).json({ message: 'Could not get that event.' });
    };
});

router.post('/', restricted, async (req, res) => {
    const organizerId = req.user.id;
    req.body.organizer_id = organizerId;
    await Events.insert(req.body)
        .then(event => {
            res.status(201).json(event);
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be added.' });
        });
});

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params;

    Events.findByIdOrganizer(id)
        .then(event => {
            if (event.Organizer === req.user.username) {
                Events.remove(id)
                .then(deleted => {
                    res.status(200).json({ message: 'That event was successfully deleted.' });
                })
                .catch(error => {
                    res.status(500).json({ message: 'That event could not be deleted.' });
                });
            } else {
                res.status(500).json({ message: 'You don\'t have access to change that event.' });
            };
        })
        .catch(error => {
            res.status(500).json({ message: 'You do not have access to change that event.' });
        });
});

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;

    Events.findByIdOrganizer(id)
        .then(event => {
            if (event.Organizer === req.user.username) {
                Events.update(id, req.body)
                    .then(event => {
                        res.status(200).json({ message: 'That event has been successfully updated.' });
                    })
                    .catch(error => {
                        res.status(404).json({ message: 'That event could not be found.' });
                    });
            } else {
                res.status(500).json({ message: 'You don\'t have access to change that event.' });
            };
        })
        .catch(error => {
            res.status(500).json({ message: 'You do not have access to change that event.' });
        });
});

module.exports = router;

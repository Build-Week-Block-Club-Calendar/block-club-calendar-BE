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

router.get('/:id', restricted, async (req, res) => {
    const { id } = req.params;

    try {
        const events = await Events.findById(id);
        if (events) {
            res.json(events);
        } else {
            res.status(404).json({ message: 'Could not find an event with that ID.' });
        };
    } catch (error) {
        res.status(500).json({ message: 'Could not get that event.' });
    };
});

router.post('/', restricted, async (req, res) => {
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

    Events.remove(id)
        .then(deleted => {
            res.status(204).json({ message: 'That event was successfully deleted.' });
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be deleted.' });
        });
});

router.put('/:id', restricted, async (req, res) => {
    try {
        const event = await Events.update(req.params.id, req.body);
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

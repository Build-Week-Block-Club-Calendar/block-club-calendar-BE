// WIP: see below

const router = require('express').Router();

const Events = require('./eventModel.js');
const restricted = require('../auth/authMiddleware.js');
const checkRole = require('../auth/check-admin-middleware.js');

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
            res.status(404).json({ message: 'Could not find an event with that Organizer.' });
        };
    } catch (error) {
        res.status(500).json({ message: 'Could not get that event.' });
    };
});

// router.get('/:organizer', (req, res) => {
//     const { organizer } = req.params

//     Events.getEventsByOrganizer(organizer)
//         .then(eventOrganizer => {
//             res.status(200).json(eventOrganizer);
//         })
//         .catch(error => {
//             res.status(404).json(error.message);
//         });
// });

router.post('/', restricted, async (req, res) => {
    await Events.insert(req.body)
        .then(event => {
            res.status(201).json(event);
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be added.' });
        });
});


// The delete is working but the response isn't working. WIP 
router.delete('/:id', restricted, checkRole('admin'), (req, res) => {
    const { id } = req.params;

    Events.remove(id)
        .then(deleted => {
            res.status(200).json({ message: 'That event was successfully deleted.' });
        })
        .catch(error => {
            res.status(500).json({ message: 'That event could not be deleted.' });
        });
});

router.put('/:id', restricted, checkRole('admin'), async (req, res) => {
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

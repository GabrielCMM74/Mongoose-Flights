var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// GET /flights/new
// router.get('/', flightsCtrl.index)

router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.get('/:id/tickets/new', flightsCtrl.newTicket);

// router.delete('/:id', flightsCtrl.deleteFlight);

router.post('/', flightsCtrl.create)

router.delete('/:id', flightsCtrl.deleteFlight);




module.exports = router;
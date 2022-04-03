const Flight = require("../models/flight");
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  newTicket,
  deleteFlight
};

function newFlight(req, res) {
  const newFlight = new Flight();
  departDefault = newFlight.departs;
  const departsDate = departDefault.toISOString().slice(0, 16);
  res.render("flights/new", { departsDate, title: "Add Flight" });
}

function create(req, res){
    Flight.create(req.body, function(err, flights){
        if (err) return res.render('flight/new');
        res.redirect('/');
    })
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights, title: "All Flights" });
    });
}

function show(req, res, next) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) return res.redirect('/flights');
    Ticket.find({flight: flight._id}, function(err2, tickets) {
      res.render('flights/show', { flight, tickets, title: 'Flight Detail' });
    });
  });
};


function newTicket(req, res){
  Flight.findById(req.params.id, function(err, flight){
      console.log(flight)
  res.render('tickets/new', {title: 'New Ticket', flight })
})
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    if (err) return res.redirect('/flights');
      console.log(flight);
    res.redirect('/flights');
  });
};

// function show(req, res){ 
//   Flight.findById(req.params.id, function (err, flight) {
//       console.log(flight)
//       Ticket.find({ flight: flight._id }, function (err, tickets) {
//           res.render('flights/show', { tickets, title: 'Flight Detail', flight });
//       })
//   });
// }

// function show(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//       res.render('flights/show', { title: 'Flight Details', flight });
//     });
//   }


// function create(req, res){
//     Flight.create(req.body, function(err, flightDoc){
//         res.redirect('/flights')
//     })

// }
// function index(req, res) {
//     Flight.find({}, function (err, flightDoc) {

//         res.render('flights/index', { flights:flightDoc });
//     });
// }
// function create(req, res) {
//     const flight = new Flight(req.body);
//     flight.save(function (err) {
//         if (err) return res.render('flight/new');
//         res.redirect('/');
//     });
// }
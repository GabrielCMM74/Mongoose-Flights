const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  show
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
        res.render('flights/index', { flights, title: "All Flight" });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Details', flight });
    });
  }
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
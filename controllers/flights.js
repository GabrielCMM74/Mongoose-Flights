const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create
};

function newFlight(req, res) {
    const newFlight = new Flight();
    departDefault = newFlight.departs;
    const departsDate = departDefault.toISOString().slice(0, 16);
    res.render('flights/new', { departsDate });
}


function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flight/new');
        res.redirect('/flights/new');
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

// function newFlight(req, res) {
//     const newFlight = new Flight();
//     let departDefault = newFlight.departs;
//     const departsDate = departDefault.toISOString().slice(0, 16);
//     res.render('flights/new', { departsDate });
// }


// // function create(req, res) {
// //     const flight = new Flight(req.body);
// //     flight.save(function (err) {
// //         if (err) return res.redirect('/flights/new');
// //     });
// // }

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
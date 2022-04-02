const Flight = require("../models/flight");

module.exports = {
    create
};

function create(req, res){
    Flight.findById(req.params.id, function(err, flightDb){

        console.log(flightDb)
        flightDb.destinations.push(req.body);
      
        console.log(req.body)
        flightDb.save(function (err) {
            res.redirect(`/flights/${flightDb._id}`)
        })
    })
}
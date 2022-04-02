const Flight = require("../models/flight");

module.exports = {
    create,
    delete: deleteDest
};

function create(req, res){
    Flight.findById(req.params.id, function(err, flightDb){

        // console.log(flightDb)
        flightDb.destinations.push(req.body);
        
        // console.log(req.body)
        flightDb.save(function (err) {
            res.redirect(`/flights/${flightDb._id}`)
        })
    })
}

function deleteDest(req, res) {
//     const idx = destinations.findIndex(dest => dest.id === parseInt(id));
//   destinations.splice(idx, 1);
//    Flight.destinations.findByIdAndDelete(req.params.id, function(err, destDb){
//         console.log(destDb)

Flight.findByIdAndDelete(req.params.id, function(err, dest){
    console.log(dest)
    dest.destinations.pop(req.body)

})

res.redirect(`/flights/${dest._id}`)
    };
    
  
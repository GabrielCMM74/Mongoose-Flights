const Flight = require("../models/flight");

module.exports = {
    create,
    deleteDest
    
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



async function deleteDest(req, res) {

    
    console.log(req.params)

    const flight = await Flight.findById(req.params.id)

    await flight.destinations.remove(req.params.destinationId)

    await flight.save()

    console.log(flight)
    res.redirect(`/flights/${flight._id}`)

    // console.log(flight)
        // Flight.findById(req.params.id), function(err, flightId){
    //     flightId.destinations.remove(req.params.destinationId)


    //     flightId.save(function(err){
    //         res.redirect(`/flights/${flightId._id}`)
    // //     })
    // }

    // Flight.destinations.remove(req.params.id)

    // Flight.destinations.remove(req.params.id)
    // console.log(req.body, `Yeah this is the delete dest`)

// Flight.save(function (err) {
//             // res.redirect(`/flights/${Flight._id}`)
//         })
//     const idx = destinations.findIndex(dest => dest.id === parseInt(id));
//   destinations.splice(idx, 1);
//    Flight.destinations.findByIdAndDelete(req.params.id, function(err, destDb){
//         console.log(destDb)

// Flight.findByIdAndDelete(req.params.id, function(err, dest){
//     console.log(dest)
//     dest.destinations.pop(req.body)

}


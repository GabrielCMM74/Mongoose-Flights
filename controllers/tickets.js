const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    create,
    deleteTicket
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flightDocument){
        req.body.flight = flightDocument._id
        console.log(flightDocument)
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flightDocument._id}`)
        })
    })
}

 function deleteTicket(req, res) {

     
   
        Ticket.findByIdAndDelete(req.params.ticketId, function(err, ticket){
        //   if (err) return res.redirect('/flights');
            console.log(ticket);
        Flight.findById(req.params.id,  function(err, flight){
            res.redirect(`/flights/${flight.id}`);
        })

         
        });
      

    // Flight.findById(req.params.id), function(err, flightId){
    //         flightId.tickets.remove(req.params.ticketId)
    
    //         console.log(req.params)
    //         flightId.save(function(err){
    //             res.redirect(`/flights/${flightId._id}`)
    //         })
    //     }
    // console.log(req.params)

    // const flight = Flight.findById(req.params.id)

    // const ticket = Ticket.findById(req.params.ticketId)

    // Ticket.remove(req.params.ticketId)

    // Flight.findById(req.params.id), function(err, flightId){
              
        
    //             console.log(req.params)
    //             flight.save(function(err){
                   
    //             })

    // console.log(ticket)
    // res.redirect(`/flights/${flight._id}`)

}
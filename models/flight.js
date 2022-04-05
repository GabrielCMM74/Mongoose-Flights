const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class

const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN', 'CLT', 'LGA']
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United', 'Spirit', 'Jetblue']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN', 'CLT', 'LGA'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10, 
        max: 9999
    },
    departs: {
        type: Date,
        default:  () => {
            let oneYearFromNow = new Date()
            return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        } 
    },
    destinations: [destinationsSchema]
});



module.exports = mongoose.model('Flight', flightSchema);
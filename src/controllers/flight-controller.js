const {FlightService} = require('../services/index');
const flightService = new FlightService();

const create = async (req,res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);  
        return res.status(201).json({
            data: flight,
            success: true,  
            message: "Successfully created a flight",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in controller layer",error);
        return res.status(500).json({       
            data: {},
            success: false,
            message: "Unable to create a flight",
            err: error
        })
    }
}
const getAll= async (req,res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully fetched all flights",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in controller layer",error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch flights",
            err: error
        })
    }
}

module.exports = {

    create,
    getAll
}
const validateFlights = (req, res, next) => {
    if(!req.body.flightNumber || !req.body.airplaneId ||
         !req.body.departureTime || !req.body.arrivalTime || !req.body.departureAirportId || !req.body.arrivalAirportId || !req.body.price) {
        return res.status(400).json({
            data:{},
            sucess: false,
            message: "Validation error",
             error: "Missing required flight information" });
    }
    next();
}

module.exports = {
    validateFlights
}
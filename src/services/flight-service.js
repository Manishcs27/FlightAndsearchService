const airplane = require('../models/airplane');
const {FlightRepository , AirplaneRepository} = require('../repository/index');

const { compareTime } = require('../utils/helper')
class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,departureTime)){
                throw {error: 'Arrival Time should not be less than departure'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});

            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer",error);
            throw error;
        }
}
async getFlights(){
    //todo

}
}
module.exports = FlightService;
// /**
//  * flightNumber,
//  * airplaneId,
//  * departureAirportId,
//  * arrivalAirportId,
//  * arrivalTime,
//  * departureTime,
//  * price,
//  * totalSeats -> airplane
//  */
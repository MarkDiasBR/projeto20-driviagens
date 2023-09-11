import flightsRepository from "../repositories/flights-repository.js";
import passengersRepository from "../repositories/passengers-repository.js";
import travelsRepository from "../repositories/travels-repository.js";
import errors from "../errors/index.js";

async function create(passengerId, flightId) {
    const search1 = await passengersRepository.getById(passengerId);
    
    if (search1.rowCount === 0) {
        throw errors.notFound("Passenger");
    }

    const search2 = await flightsRepository.getById(flightId);

    if (search2.rowCount === 0) {
        throw errors.notFound("Flight");
    }

    return await travelsRepository.create(passengerId, flightId);
    
}

const flightsService = { create };

export default flightsService;
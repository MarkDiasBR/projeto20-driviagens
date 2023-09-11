import flightsRepository from "../repositories/flights-repository.js";
import citiesRepository from "../repositories/cities-repository.js";
import errors from "../errors/index.js";

async function create(origin, destination, date) {
    const search1 = await citiesRepository.getById(origin);

    if (search1.rowCount === 0) {
        throw errors.notFound("City");
    }

    const search2 = await citiesRepository.getById(destination);

    if (search2.rowCount === 0) {
        throw errors.notFound("City");
    }

    return await flightsRepository.create(origin, destination, date);
}

const flightsService = { create };

export default flightsService;
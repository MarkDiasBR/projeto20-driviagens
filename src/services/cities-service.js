import citiesRepository from "../repositories/cities-repository.js";
import errors from "../errors/index.js";

async function create(name) {
    const search = await citiesRepository.get(name);

    if (search.rowCount !== 0) {
        throw errors.conflictingResource("cities", name);
    }

    return await citiesRepository.create(name);
}

const citiesService = { create };

export default citiesService;
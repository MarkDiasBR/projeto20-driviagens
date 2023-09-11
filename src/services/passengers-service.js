import passengersRepository from "../repositories/passengers-repository.js";
import errors from "../errors/index.js";

async function create(firstName, lastName) {
    return await passengersRepository.create(firstName, lastName);
}

async function read(name) {
    const result = await passengersRepository.read(name);

    if (result.rowCount > 10) {
        throw errors.tooManyResults();
    }

    return result.rows;
}

const passengersService = { create, read };

export default passengersService;
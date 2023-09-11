import passengersRepository from "../repositories/passengers-repository.js";
import errors from "../errors/index.js";

async function create(firstName, lastName) {
    return await passengersRepository.create(firstName, lastName);
}

const passengersService = { create };

export default passengersService;
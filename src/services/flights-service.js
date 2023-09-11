import flightsRepository from "../repositories/flights-repository.js";
import citiesRepository from "../repositories/cities-repository.js";
import errors from "../errors/index.js";
import dayjs from "dayjs";
import custommParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(custommParseFormat);

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

async function read(origin, destination, biggerDate, smallerDate) {
    if (smallerDate && !biggerDate || !smallerDate && biggerDate) {
        throw errors.incompleteData();
    }

    if (dayjs(smallerDate, "DD-MM-YYYY").isAfter(dayjs(biggerDate, "DD-MM-YYYY"))) {
        throw errors.badRequest();
    }

    const result = await flightsRepository.read(origin, destination, biggerDate, smallerDate);
    return result.rows;
}

const flightsService = { create, read };

export default flightsService;
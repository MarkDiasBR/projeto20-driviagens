import httpStatus from "http-status";
import errors from "../errors/index.js";
import flightsService from "../services/flights-service.js";

async function create(req, res) {
    const { body } = req;

    const {origin, destination, date} = body;

    if (!origin || !destination || !date ) throw errors.incompleteData(); //Treating the case AGAIN where fields are not filled

    await flightsService.create(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

async function read(req, res) {
    const { origin, destination, 'smaller-date': smallerDate, 'bigger-date': biggerDate, page } = req.query;

    const result = await flightsService.read(origin, destination, biggerDate, smallerDate, page);

    res.status(httpStatus.OK).send(result);
}

const flightsController = { create, read };

export default flightsController;

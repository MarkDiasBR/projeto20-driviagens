import httpStatus from "http-status";
import errors from "../errors/index.js";
import flightsService from "../services/flights-service.js";

async function create(req, res, next) {
    try {
        const { body } = req;

        const {origin, destination, date} = body;

        if (!origin || !destination || !date ) throw errors.incompleteData(); //Treating the case AGAIN where fields are not filled
    
        await flightsService.create(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error);
    }
}

const flightsController = { create };

export default flightsController;

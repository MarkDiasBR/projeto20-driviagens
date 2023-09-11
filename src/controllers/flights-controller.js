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

async function read(req, res, next) {
    
    const { origin, destination, 'smaller-date': smallerDate, 'bigger-date': biggerDate } = req.query;

    console.log(req.query);

    try {
        const result = await flightsService.read(origin, destination, biggerDate, smallerDate); 
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        next(error);
    }
}

const flightsController = { create, read };

export default flightsController;

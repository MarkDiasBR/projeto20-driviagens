import httpStatus from "http-status";
import errors from "../errors/index.js";
import travelsService from "../services/travels-service.js";

async function create(req, res, next) {
    try {
        const { body } = req;
        
        const {passengerId, flightId} = body;

        if (!passengerId || !flightId ) throw errors.incompleteData(); //Treating the case AGAIN where fields are not filled
    
        await travelsService.create(passengerId, flightId);
        
        res.sendStatus(httpStatus.CREATED);
        
    } catch (error) {
        next(error);
    }
}

const travelsController = { create };

export default travelsController;

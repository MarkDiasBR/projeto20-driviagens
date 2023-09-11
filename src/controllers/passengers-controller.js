import httpStatus from "http-status";
import errors from "../errors/index.js";
import passengersService from "../services/passengers-service.js";

async function create(req, res) {
    try {
        const { body } = req;

        const { firstName, lastName } = body;  //Treating the case AGAIN where fields are not filled

        if (!firstName || !lastName) throw errors.incompleteData(); //Treating the case AGAIN where fields are not filled
        
        await passengersService.create(firstName, lastName);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error);
    }
}

async function read(req, res, next) {
    const { name, page } = req.query;

    try {
        const result = await passengersService.read(name, page); 
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        next(error);
    }
}

const passengersController = { create, read };

export default passengersController;
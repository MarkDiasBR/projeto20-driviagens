import httpStatus from "http-status";
import errors from "../errors/index.js";
import citiesService from "../services/cities-service.js";

async function create(req, res) {
    const { body } = req;

    const { name } = body;  //Treating the case AGAIN where fields are not filled

    if (!name) throw errors.incompleteData(); //Treating the case AGAIN where fields are not filled
    
    await citiesService.create(name);
    res.sendStatus(httpStatus.CREATED);
}

const citiesController = { create };

export default citiesController;
import { Router } from "express";
import passengersController from "../controllers/passengers-controller.js";
import flightsController from "../controllers/flights-controller.js";
import citiesController from "../controllers/cities-controller.js";
import travelsController from "../controllers/travels-controller.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import paramsSchemaValidation from "../middlewares/paramsSchemaValidation.js"
import schemas from "../schemas/schemas.js";

const authRouter = Router();

authRouter.post('/passengers', schemaValidation(schemas.passenger) , passengersController.create);
authRouter.post('/cities', schemaValidation(schemas.city), citiesController.create);
authRouter.post('/flights', schemaValidation(schemas.flight), flightsController.create);
authRouter.post('/travels', schemaValidation(schemas.travel), travelsController.create);
authRouter.get('/flights', paramsSchemaValidation(schemas.flightsParams), flightsController.read);

export default authRouter;

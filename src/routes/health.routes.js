import { Router } from "express";

const healthRouter = Router();

healthRouter.get('/health', (req, res) => res.send("I'm alive!"));

export default healthRouter;

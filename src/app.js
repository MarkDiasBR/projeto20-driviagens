import express, { json } from 'express';
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import db from './database/connection.js';
import router from './routes/index.routes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.bgMagenta('\n [Node.js/Express] API connected SUCCESSFULLY! '), '🖥️⚙️✨');
    console.log(chalk.white(' Server connected on PORT'), chalk.blue.italic.underline(`${port}`));
});

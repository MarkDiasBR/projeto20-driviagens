import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import db from './database/connection.js';
import router from './routes/index.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import dayjs from 'dayjs';
import custommParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(custommParseFormat);

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

// const minhaDate = dayjs();
// const formatDate = minhaDate.format('DD-MM-YYYY');
// // console.log("minhaDate", formatDate)
// console.log(dayjs(formatDate, { format: "DD-MM-YYYY", strict: true }).isValid())
// console.log(dayjs().isAfter('09-09-2023', 'date'))

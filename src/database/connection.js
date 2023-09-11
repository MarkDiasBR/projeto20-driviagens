import chalk from 'chalk';
import pg from 'pg';
import dotenv from 'dotenv';
import databaseUtils from "../utils/databaseUtils.js";

dotenv.config();

const { name, port } = databaseUtils.stringConsoleFormatter(process.env.DATABASE_URL);

async function databaseConnection() {

    const { Pool } = pg;

    const configDatabase = {   
        connectionString: process.env.DATABASE_URL
    };

    if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

    let db = new Pool(configDatabase);

    try {
        await db.connect();
        console.log(chalk.black.bgGreen('\n [🐘 PostgreSQL] Database connected SUCCESSFULLY! '), '🗄️📨✨')
        console.log(chalk.white(' Database'), chalk.underline.italic.blue(name), chalk.white('connected on PORT'), 
            chalk.underline.italic.blue(port));
    } catch (err) {
        console.log(chalk.white.bgRed('\n [🐘 PostgreSQL] Database connection failed! '), '🗄️📨🚫');
        console.error(err.message);
    }

    return db;
}

const db = await databaseConnection();

export default db;


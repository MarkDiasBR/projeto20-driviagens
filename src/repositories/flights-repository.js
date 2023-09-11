import db from '../database/connection.js';

async function create(origin, destination, date) {
    return await db.query(`
        INSERT 
            INTO flights (origin, destination, date)
            VALUES ($1, $2, $3);
    `, [origin, destination, date]
    );
}

async function getById(id) {
    return await db.query(`
        SELECT *
            FROM flights
            WHERE id = $1;
    `, [id]
    );
}

const flightsRepository = { create, getById };

export default flightsRepository;
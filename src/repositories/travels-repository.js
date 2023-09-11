import db from '../database/connection.js';

async function create(passengerId, flightId) {
    await db.query(`
        INSERT 
            INTO travels ("passengerId", "flightId")
            VALUES ($1, $2);
    `, [passengerId, flightId]
    )
}


const travelsRepository = { create };

export default travelsRepository;
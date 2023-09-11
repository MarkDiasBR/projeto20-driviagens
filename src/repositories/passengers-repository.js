import db from '../database/connection.js';

async function create(firstName, lastName) {
    await db.query(`
        INSERT 
            INTO passengers ("firstName", "lastName")
            VALUES ($1, $2);
    `, [firstName, lastName]
    )
}


async function getById(id) {
    return await db.query(`
        SELECT *
            FROM passengers
            WHERE id = $1;
    `, [id]
    );
}

const passengersRepository = { create, getById };

export default passengersRepository;
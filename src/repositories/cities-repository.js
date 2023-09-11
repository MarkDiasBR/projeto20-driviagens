import db from '../database/connection.js';

async function create(name) {
    return await db.query(`
        INSERT 
            INTO cities (name)
            VALUES ($1);
    `, [name]
    );
}

async function get(name) {
    return await db.query(`
        SELECT *
            FROM cities
            WHERE name = $1;
    `, [name]
    );
}

async function getById(id) {
    return await db.query(`
        SELECT *
            FROM cities
            WHERE id = $1;
    `, [id]
    );
}

const citiesRepository = { create, get, getById };

export default citiesRepository;
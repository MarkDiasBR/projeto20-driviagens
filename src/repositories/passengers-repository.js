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

async function read(name, page) {
    let query = `
        SELECT
            CONCAT(p."firstName", ' ', p."lastName") AS passenger,
            COUNT(t.id)::integer AS travels
        FROM
            passengers AS p
            LEFT JOIN travels AS t 
                ON p.id = t."passengerId"
    `;

    const queryParams = [];

    if (name) {
        query += ` WHERE p."firstName" ILIKE $1 OR p."lastName" ILIKE $1 `

        queryParams.push(`%${name}%`)
    }
    
    // Add ORDER BY clause
    query += ` GROUP BY passenger ORDER BY travels DESC LIMIT 10`;

    if (page) {
        const pagesMinusOne = Number(page) - 1;

        query +=  ` OFFSET ${10*pagesMinusOne}`
    }

    query += `;`;
    
    return await db.query(query, queryParams);  
}

const passengersRepository = { create, getById, read };

export default passengersRepository;
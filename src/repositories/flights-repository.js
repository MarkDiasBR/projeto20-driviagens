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

async function read(origin, destination, biggerDate, smallerDate) {
    let query = `
        SELECT
            f.id AS flight_id,
            c1.name AS origin,
            c2.name AS destination,
            TO_CHAR(f.date, 'DD-MM-YYYY') AS date
        FROM
            flights AS f
            INNER JOIN cities AS c1 ON f.origin = c1.id
            INNER JOIN cities AS c2 ON f.destination = c2.id
    `;
      
    const queryParams = [];
      
    // Add conditions based on query parameters
    if (origin) {
        query += ' WHERE c1.name = $1';
        queryParams.push(origin);
    }
        
    if (destination) {
        if (queryParams.length === 0) {
            query += ' WHERE c2.name = $1';
        } else {
            query += ' AND c2.name = $2';
        }

        queryParams.push(destination);
    }

    if (smallerDate) {
        if (queryParams.length === 0) {
            query += ' WHERE date >= $1';
        } else if (queryParams.length === 1) {
            query += ' AND date >= $2';
        } else if (queryParams.length === 2) {
            query += ' AND date >= $3';
        }

        queryParams.push(smallerDate);
    }
      
    if (biggerDate) {
        if (queryParams.length === 0) {
            query += ' WHERE date <= $1';
        } else if (queryParams.length === 1) {
            query += ' AND date <= $2';
        } else if (queryParams.length === 2) {
            query += ' AND date <= $3';
        } else if (queryParams.length === 3) {
            query += ' AND date <= $4';
        }

        queryParams.push(biggerDate);
    }
      
    
    // Add ORDER BY clause
    query += ' ORDER BY date';
    console.log(query)
    console.log('queryparams', queryParams)
    return await db.query(query, queryParams);  
}

const flightsRepository = { create, read, getById };

export default flightsRepository;
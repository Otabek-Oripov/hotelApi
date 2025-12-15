const { Pool } = require("pg");

const pool = new Pool({
    host: 'dpg-d4vrh31r0fns739riuh0-a.oregon-postgres.render.com',
    port: 5432,
    database: 'hoteldb_dwsv',
    user: 'saikou',
    password: 'MsuqM0dDk28gpfqUbiioc7KySFh43QM1',
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL successfully');
        client.release();
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL:', err.stack);
    });

module.exports = pool;

const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
    host: "dpg-d4vrh31r0fns739riuh0-a.oregon-postgres.render.com",
    database: "saikou",
    user: "hoteldb_dwsv",
    password: "MsuqM0dDk28gpfqUbiioc7KySFh43QM1",
    port: 5432,
});
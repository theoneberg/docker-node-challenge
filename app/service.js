const mysql = require('mysql2/promise');
const config = require('./config');

const pool = mysql.createPool(config.db);

async function initializeDb() {

    await pool.query('CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), PRIMARY KEY (id));');

}

async function add(name) {

    await pool.query(`INSERT INTO people VALUES (default, ?)`, name);
}

async function get() {

    [result, fields] = await pool.query('SELECT * FROM people;');

    return result;
}

async function execute() {

    await initializeDb();

    await add(`people_XPTO_${Date.now()}`);

    return await get();
}

module.exports = {
    execute
}

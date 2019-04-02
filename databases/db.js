import mysql from 'mysql';

import config from '../config/config';

const connection = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
})

connection.connect()

module.exports = connection
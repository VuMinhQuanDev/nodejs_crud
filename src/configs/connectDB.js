import mysql from 'mysql2/promise';

// // create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'phxwxfzd_crud-db',
    database: 'phxwxfzd_crud-db',
    password: '1234'
})


export default pool;
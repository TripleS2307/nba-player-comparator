require('dotenv').config();
const { Pool, Client} = require('pg');
const db_cred = {
    user: process.env.USER,
    host: process.env.HOST,
    database: "postgres",
    password: process.env.PASSWORD,
    port: 5432
};

// Connect with a connection pool.

async function poolDemo() {
    const pool = new Pool(db_cred);
    const now = await pool.query("SELECT * FROM test");
    await pool.end();
  
    return now;
}

(async () => {
    const poolResult = await poolDemo();
    console.log(poolResult.rows);
})();
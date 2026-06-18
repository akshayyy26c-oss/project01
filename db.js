const mysql = require("mysql2");

// A Connection Pool is much more robust for web servers
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000 // Gives Railway 20 seconds to wake up and respond
});

// Test the initial connection to verify it works
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed❌:", err);
  } else {
    console.log("Database connected ✅");
    connection.release(); // Return the connection back to the pool
  }
});

module.exports = pool;

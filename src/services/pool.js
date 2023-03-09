import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'utn_inventario',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0
});

export default pool;
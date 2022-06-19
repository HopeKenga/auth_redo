const { createPool } = require("mysql");

const pool = createPool({
  host: 'localhost',
  port: '8000',
  user: 'root',
  database:  'registration',
  connectionLimit: 10
});

module.exports = pool;
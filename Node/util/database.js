
const pg= require('pg');
const {Pool}=pg;


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'revgain',
  port: 5432, // PostgreSQL default port is 5432
});

module.exports=pool;


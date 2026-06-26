const express = require('express');
const cors = require('cors');
const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static('public'));

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,  
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
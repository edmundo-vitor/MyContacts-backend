const { Client } = require('pg');

const client = new Client({
   host: '172.19.0.2',
   port: 5432,
   user: 'postgres',
   password: 'postgres',
   database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
   const { rows } = await client.query(query, values);
   return rows;
};

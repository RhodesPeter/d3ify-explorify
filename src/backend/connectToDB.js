const mysql = require('mysql');

// If not local this needs to be an .env file
const databaseDetails = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Explorify',
};

const connectToDB = (databaseQuery, cb) => {
  const connection = mysql.createConnection(databaseDetails);

  connection.connect();

  connection.query(databaseQuery, (err, data) => {
    if (err) throw err;

    return cb(data);
  });

  connection.end();
};

module.exports = connectToDB;

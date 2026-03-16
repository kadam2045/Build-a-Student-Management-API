const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "students",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to database");
  const studentsTableQuery = `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL
   )`;

  connection.query(studentsTableQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Table created successfully");
  });
});

module.exports = connection;

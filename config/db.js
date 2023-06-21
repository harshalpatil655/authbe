const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "googleauth",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully connected to database");
  }
});

module.exports = { db };

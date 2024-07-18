import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "sam123",
  database:"blog"
})



// process.env.DB_KEY,
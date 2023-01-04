import config from "./config.js";
import mysql from "mysql2/promise";

const conn = await mysql.createConnection(config.db);

const [employees] = await conn.execute("SELECT * FROM employees LIMIT 10");
console.log(employees);
conn.end();

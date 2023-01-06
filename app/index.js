import config from "./config.js";
import mysql from "mysql2/promise";
import { selectStar } from "./utils.js";

const conn = await mysql.createConnection(config.db);

// We destructure the first element of the array returned by execute
const [employees] = await selectStar(conn, "employee");
console.log(employees);
conn.end();

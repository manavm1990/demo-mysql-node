import config from "./config.js";
import mysql from "mysql2/promise";
import { delById } from "./utils.js";

const conn = await mysql.createConnection(config.db);

await delById({ connection: conn, tableName: "course_names", id: 3 });

conn.end();

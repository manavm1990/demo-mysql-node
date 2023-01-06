import config from "./config.js";
import mysql from "mysql2/promise";
import { generateSectionStats } from "./lib.js";
import { selectStar } from "./utils.js";

const conn = await mysql.createConnection(config.db);

const [allBooks] = await selectStar(conn, "favorite_books");

const [sectionStats] = await generateSectionStats(conn);
console.table(allBooks);
console.table(sectionStats);

conn.end();

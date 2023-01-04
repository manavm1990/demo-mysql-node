import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
  },
};

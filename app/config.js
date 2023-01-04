import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
};

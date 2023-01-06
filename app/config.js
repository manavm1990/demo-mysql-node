import dotenv from "dotenv";

dotenv.config();

// We export an object with the necessary configuration
// Other modules can then use this object as needed
// Only this module directly accesses the environment variables
export default {
  db: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
  },
};

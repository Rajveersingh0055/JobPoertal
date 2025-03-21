import dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    PORT: process.env.PORT,
  },
  db: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
};

export default config;

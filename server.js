import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jokeRoute from "./Routes/routes.js";

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5050; // Use PORT from .env or default to 5000

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/jokes", jokeRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

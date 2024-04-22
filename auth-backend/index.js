import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;
// use the port specified in the environment variable PORT, or default to port 5000

const app = express(); //it parses the incoming request body if any and populates the req.body property with the parsed JSON data. This allow us to easily access the JSON data sent by clients in HTTP requests
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
  res.send("Welcome to HHLD Chat App!");
});

app.use("/auth", authRouter);

app.listen(PORT, (req, res) => {
  connectToMongoDB();
  console.log(`Server is running at ${PORT}`);
});

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import animalesRouter from "./routes/animalesRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

//ENDPOINTS
app.use("/api/mascotas", animalesRouter);
app.use("/api/auth", authRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor escuchan en  http://localhosts:", PORT);
  });
});

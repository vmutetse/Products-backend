import express from "express";
import { connectDB } from "./db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import privateRoutes from "./routes/privateRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/private", privateRoutes);
//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

import express from "express";
import ConnectDB from "./config/mongodb_connection.js";
import dotenv from "dotenv";
import productsRouter from "./router/productsRoute.js";
import cors from "cors";

const app = express();
dotenv.config();

const port = 3000;

ConnectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));

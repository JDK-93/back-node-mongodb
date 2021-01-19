// Este archivo sirve para configurar la aplicación de Express
import express from "express";
import morgan from "morgan";

import { createRoles } from "./libs/initialSetup";
import productsRoutes from "./routers/products.routes";
import authRoutes from "./routers/auth.routes";

const app = express();
createRoles();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);

export default app;

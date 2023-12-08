import express from "express";

const app = express();

// chuyển tất cả sang định dạng json
app.use(express.json());

// mở khóa
import cors from "cors";
app.use(cors());

app.listen(8080);

// test
app.get("/demo", (request, response) => {
  response.send("Hello anh em");
});

// kết nối csdl
import mysql from "mysql2";
import { getRestaurant } from "./controllers/restaurantController.js";

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3307",
  database: "food_management",
});

import rootRoute from "./routes/rootRoutes.js";
app.use(rootRoute);

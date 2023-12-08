import express from "express";
import {
  getLikeOfRestaurant,
  getRestaurant,
  likeRestaurant,
  unlikeRestaurant,
  getRateRestaurant,
  rateRestaurant,
  getUserRate,
  order
} from "../controllers/restaurantController.js";

const restaurantRoute = express.Router();

// quản lý API của restaurant

restaurantRoute.get("/get", getRestaurant);
restaurantRoute.post("/like", likeRestaurant);
restaurantRoute.post("/unlike", unlikeRestaurant);
restaurantRoute.get("/get-like", getLikeOfRestaurant);
restaurantRoute.get("/get-rate", getRateRestaurant);
restaurantRoute.get("/get-user-rate", getUserRate);
restaurantRoute.post("/rate", rateRestaurant);
restaurantRoute.post("/order", order);

export default restaurantRoute;

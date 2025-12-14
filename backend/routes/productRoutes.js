import express from "express";
import { getProducts, addManyProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/fetch", getProducts);            // GET → fetch all
router.post("/add", addManyProducts);  // POST → insert batch

export default router;

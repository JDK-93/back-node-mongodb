import { Router } from "express";
import * as productsController from "../controllers/products.controller";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt";
const router = Router();

router.post(
  "/",
  [verifyToken, isModerator, isAdmin],
  productsController.createProduct
);
router.get("/", productsController.getProducts);
router.get("/:productId", productsController.getProductById);
router.put("/:productId", verifyToken, productsController.updateProductById);
router.delete("/", verifyToken, productsController.deleteProductById);

export default router;

const express = require("express");
const router = express.Router();
const productOptionRouter = require('../routes/productOptionRoutes');

const {
	getProducts,
	createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImages,
  uploadToCloud,
} = require("../controllers/productControllers");

const { protect, restrictTo } = require("../controllers/authControllers");

// nested routes
router
  .use("/:productId/productOptions", productOptionRouter);

router
  .route("/")
  .get(getProducts)
  .post(
    // protect,
    // restrictTo('admin'),
    uploadImages, uploadToCloud, createProduct);

router
	.route("/:id")
	.get(getProduct)
	.patch(protect, restrictTo("admin"), updateProduct)
	.delete(protect, restrictTo("admin"), deleteProduct);

module.exports = router;
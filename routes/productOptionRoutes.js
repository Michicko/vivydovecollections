const express = require('express');
const { protect, restrictTo } = require('../controllers/authControllers');
const { getProductOptions, getProductOption, updateProductOption, deleteProductOption, createProductOption, setProductOptionId} = require('../controllers/productOptionControllers');

const router = express.Router({mergeParams: true});

router
	.route("/")
	.get(getProductOptions)
	.post(
		// protect, restrictTo("admin"),
		setProductOptionId, createProductOption);

router
	.route("/:id")
	.get(protect, restrictTo("admin"), getProductOption)
	.patch(protect, updateProductOption)
	.delete(protect, deleteProductOption);


module.exports = router;
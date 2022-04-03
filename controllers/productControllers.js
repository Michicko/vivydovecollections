const Product = require("../model/productModel");
const factory = require("./handlerFactory");
const { upload } = require('../utils/multer');
const catchAsync = require("../utils/catchAsync");
const { uploadImageToCloud } = require("../utils/cloudinary");

// multer
exports.uploadImages = upload;

// cloudinary
exports.uploadToCloud = uploadImageToCloud('name');

// exports.getProducts = factory.getAll(Product);
exports.getProducts = factory.getAll(Product, {path: 'productOptions', select: 'color mainMaterial'});

exports.createProduct = factory.createOne(Product);

exports.getProduct = factory.getOne(Product, { path: "productOptions stock" });

exports.updateProduct = factory.updateOne(Product);

exports.deleteProduct = factory.deleteOne(Product);

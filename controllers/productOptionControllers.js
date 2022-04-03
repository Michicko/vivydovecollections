const ProductOption = require("../model/productOptionModel");
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');


exports.getProductOptions = catchAsync(async (req, res, next) => {
  let filter;
  if(req.params.productId) filter = {product: req.params.productId}
  const productOptions = await ProductOption.find(filter);

  res.status(200).json({
    status: 'success',
    data: {
      productOptions,
    }
  });
});

exports.setProductOptionId = (req, res, next) => {
	// nested routes
  if (!req.body.product) req.body.product = req.params.productId;
  next();
}

exports.createProductOption = factory.createOne(ProductOption);

exports.getProductOption = factory.getOne(ProductOption);

exports.updateProductOption = factory.updateOne(ProductOption);

exports.deleteProductOption = factory.deleteOne(ProductOption);



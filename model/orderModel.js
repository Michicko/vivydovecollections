const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		status: {
			type: String,
			enum: ["delivered", "failed", "pending", "in-progress"],
			default: "pending",
		},
		price: {
			type: Number,
			required: [true, "An order must have a price"],
		},
		dateOrdered: {
			type: Date,
			default: Date.now(),
			required: [true, "An order must have an order date"],
		},
		dateDelivered: {
			type: Date,
		},
		productsOrdered: [
			{
				productOption: {
					type: mongoose.Schema.ObjectId,
					ref: "ProductOption",
					required: [true, "An order must belong to a product"],
				},
				productQuantity: {
					type: Number,
					required: [true, "An ordered product option must have a quantity"],
				},
			},
		],
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
			required: [true, "An order must belong to a user"],
		},
		paid: {
			type: Boolean,
			default: true,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

orderSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "productsOrdered",
    // get product of productoption
    populate: { path: "product"}
	});
  next();
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
const mongoose = require("mongoose");

const productOptionSchema = new mongoose.Schema(
	{
		color: {
			type: String,
			required: [true, "A productOption must have a color"],
		},
		footSize: {
			type: mongoose.Schema.Types.Mixed,
			required: [true, "A productOption must have a size"],
		},
		heelHeight: {
			type: String,
		},
		quantity: {
			type: Number,
			required: [true, "A productOption must have an available quantity"],
		},
		mainMaterial: {
			type: String,
			required: [true, "A productOption must have a main material"],
		},
		product: {
			type: mongoose.Schema.ObjectId,
			ref: "Product",
			required: [true, "A productOption must belong to a product"],
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// productOptionSchema.pre(/^find/, function (next) {
// 	this.populate({ path: "product", select: 'name category' });
// 	next();
// })

const ProductOption = mongoose.model("ProductOption", productOptionSchema);

module.exports = ProductOption;

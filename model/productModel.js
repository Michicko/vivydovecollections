const mongoose = require("mongoose");
const slugify = require('slugify');
const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: [true, "A product must have a name"],
		},
		category: {
			type: String,
			required: [true, "A product must have a category"],
		},
		image: {
			type: mongoose.Schema.Types.Mixed,
			required: [true, "A product must have an image"],
		},
		otherImages: {
			type: [mongoose.Schema.Types.Mixed],
			required: [true, "A product must have other images"],
		},
		brand: {
			type: String,
			required: [true, "A product must have a brand"],
		},
		price: {
			type: Number,
			required: [true, "A product must have a price"],
		},
		discount: {
			type: Number,
		},
		status: {
			type: String,
			enum: ["recommended", "new", "regular"],
			required: [true, "A product must have a status"],
			default: "new",
		},
		featured: {
			type: String,
		},
		slug: {
			type: String,
			required: [true, "A product must have a slug"],
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

productSchema.pre('save', function (next) {
	this.slug = slugify(this.name);
	next();
});

// document middleware
// virtual populate
// populate product options
productSchema.virtual("productOptions", {
	ref: "ProductOption",
	foreignField: "product",
	localField: "_id",
});


// count total number of product options available
productSchema.virtual("stock", {
	ref: "ProductOption",
	foreignField: "product",
	localField: "_id",
	count: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

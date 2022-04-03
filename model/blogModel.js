const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: [true, "A blog must have a title"],
	},
	image: {
		type: mongoose.Schema.Types.Mixed,
		required: [true, "A blog must have an image"],
	},
	body: {
		type: String,
		trim: true,
		required: [true, "A blog must have a body"],
	},
	author: {
		type: String,
		required: [true, "A blog must have an author"],
	},
	created: {
		type: Date,
		default: Date.now,
	},
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
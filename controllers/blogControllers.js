const Blog = require("../model/blogModel");
const factory = require("./handlerFactory");
const { upload} = require("../utils/multer");
const { uploadImageToCloud } = require("../utils/cloudinary");

// multer
exports.uploadImage = upload;

// Cloudinary
exports.uploadToCloud = uploadImageToCloud("title");

exports.getBlogs = factory.getAll(Blog);

exports.getBlog = factory.getOne(Blog);

exports.createBlog = factory.createOne(Blog);

exports.updateBlog = factory.updateOne(Blog);

exports.deleteBlog = factory.deleteOne(Blog);

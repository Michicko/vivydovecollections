const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "./config.env" });
const slugify = require("slugify")
const catchAsync = require("../utils/catchAsync");
const fs = require('fs');

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	// secure: true,
});


const cloudinaryUploader = async (path, identifier) =>
	await cloudinary.uploader.upload(path, {
		public_id: `vivydovecollections/images/${slugify(identifier)}`,
	});

// remove temorary saved image todisk
const removeTempImg = (path) => {
	return fs.unlink(path, () => {});
};

// create object
const createObjData = (url ,id) => {
	return {
		url,
		cloudinary_id: id
	}
}

// Upload image to cloudinary
exports.uploadImageToCloud = (iden) =>
	catchAsync(async (req, res, next) => {
		let otherImgs = [];
		const id = iden === "name" ? req.body.name : req.body.title;

		// handle otheriMAGES - multiple images
		if (req.files.otherImages) {
			const imagesPath = req.files.otherImages.map((oth) => oth.path);
			

			// upload images to cloudindary
			const result = imagesPath.map(async (pth, i) => {
				const resDat = await cloudinaryUploader(pth, `${id}-${i + 1}`);
				removeTempImg(pth);
				return resDat;
			});

			const data = await Promise.all(result);

			// push res url and public id to arr
			data.forEach((dat) => {
				const datObj = createObjData(dat.secure_url, dat.public_id);
				otherImgs.push(datObj);
			});

			// asign image to req.body.otherImages
			req.body.otherImages = otherImgs;
		}

		// handle single image
		const imagePath = req.files.image[0].path;
		const result = await cloudinaryUploader(imagePath, id);
		const data = createObjData(result.secure_url, result.public_id);
		// asign image to req.body.image
		req.body.image = data;
		// remove temp image from disk
		removeTempImg(imagePath);
		next();
	});


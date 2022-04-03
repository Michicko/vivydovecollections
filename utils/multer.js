const multer = require("multer");
const AppError = require("./appError");
const slugify = require("slugify");

// multer storage
const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "utils/tempAssets");
	},
	
	filename: (req, file, cb) => {
		const ext = file.mimetype.split("/")[1];
		if (file.fieldname === "image") {
			const filename = `${slugify(req.body.name || req.body.title)}.${ext}`;
			cb(null, filename);
		} else if (file.fieldname === "otherImages") {
			let filename = "";
			req.files.otherImages.forEach((file, i) => {
				filename = `${slugify(req.body.name || req.body.title)}-${
					i + 1
				}.${ext}`;
			});
			cb(null, filename);
		}
	},
});

// multer filter
const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image")) {
		cb(null, true);
	} else {
		cb(new AppError("Not an image! please upload only images", 400), false);
	}
};

// upload
exports.upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
}).fields([
	{ name: "image", maxCount: 1 },
	{ name: "otherImages", maxCount: 8 },
]);


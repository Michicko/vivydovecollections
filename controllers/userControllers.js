const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

const filterObj = (obj, ...allowedFields) => {
	const newObj = {}
	Object.keys(obj).forEach((el) => {
		if (allowedFields.includes(el)) {
			newObj[el] = obj[el];
		}
	})

	return newObj;
}

// get signed in user
exports.getMe = (req, res, next) => {
	req.params.id = req.user.id;
	next();
}

// update signed in user
exports.updateMe = catchAsync(async function (req, res, next) {
	// create error if user post password
	if (req.body.password || req.body.passwordConfirm) {
		return next(new AppError('This route is not for password update', 400));
	}

	// update the user document
	// filter out unwanted field
	const filteredBody = filterObj(req.body, 'firstName', 'lastName', 'email', 'address')
	const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
		new: true,
		runValidators: true
	});

	res.status(200).json({
		status: 'success',
		data: {
			user
		}
	})
});

// delete signed in user
exports.deleteMe = catchAsync(async function (req, res, next) {
	await User.findByIdAndUpdate(req.user.id, { active: false });

	res.status(204).json({
		status: 'success',
		data: null
	})
})

exports.getUsers = factory.getAll(User);

exports.getUser = factory.getOne(User);

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);
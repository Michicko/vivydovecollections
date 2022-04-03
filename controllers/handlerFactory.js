const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model, popOptions) =>
	catchAsync(async (req, res, next) => {
		let query = Model.find({});

		if (popOptions) {
			query = query.populate(popOptions)
		}

	const doc = await query

		res.status(200).json({
			status: "success",
			results: doc.length,
			data: {
				data: doc,
			},
		});
	});

exports.getOne = (Model, popOptions) =>
	catchAsync(async (req, res, next) => {
		const { id } = req.params;
		let query = Model.findById(id);

		if (popOptions) {
			query = query.populate(popOptions);
		}

		const doc = await query;

		if (!doc) {
			return next(new AppError("No document found with that id", 404));
		}

		res.status(200).json({
			status: "success",
			data: {
				data: doc,
			},
		});
	});

exports.createOne = (Model) =>
	catchAsync(async function (req, res, next) {
		const doc = await Model.create(req.body);

		res.status(201).json({
			status: "success",
			data: {
				data: doc,
			},
		});
	});

exports.updateOne = (Model) =>
	catchAsync(async function (req, res, next) {
		const { id } = req.params;
		const doc = await Model.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!doc) {
			return next(new AppError("No document found with that id", 404));
		}

		res.status(200).json({
			status: "success",
			data: {
				data: doc,
			},
		});
	});

exports.deleteOne = (Model) =>
	catchAsync(async function (req, res, next) {
		const { id } = req.params;
		const doc = await Model.findByIdAndDelete(id);

		if (!doc) {
			return next(new AppError("No document found with that id", 404));
		}

		res.status(204).json({
			status: "success",
			data: null,
		});
	});

const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Please provide your First Name"],
	},
	lastName: {
		type: String,
		required: [true, "Please provide your Last Name"],
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: [true, "Please provide your Email"],
		validate: [validator.isEmail, "Please provide a valid email"],
	},
	password: {
		type: String,
		minlength: 6,
		required: [true, "Please provide a password"],
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password"],
		validate: {
			// works only on create and save
			validator: function (doc) {
				return doc === this.password;
			},
			message: "Password is not the same. Please confirm your password",
		},
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user",
	},
	phoneNumber: {
		type: Number,
		required: [true, "Enter phone number"],
	},
	address: {
		lga: {
			type: String,
			required: [true, "Please provide a lga"],
		},
		closestBusstop: {
			type: String,
			required: [true, "Please provide closest busstop"],
		},
		street: {
			type: String,
			required: [true, "Please provide street"],
		},
	},
	orders: {
		type: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "Order",
			},
		],
	},
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: Date,
	active: {
		type: Boolean,
		default: true,
		select: false,
	},
});

// hash password
userSchema.pre("save", async function (next) {
	// if password was not modified
	if (!this.isModified("password")) return next();

	// if password was modified
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.pre("save", function (next) {
	if (!this.isModified("password") || this.isNew) return next();

	this.passwordChangedAt = Date.now() - 1000;
	next();
});

userSchema.pre(/^find/, function (next) {
	this.find({ active: { $ne: false } });
	next();
});

// verify password
userSchema.methods.correctPassword = async function (
	newUserPassword,
	userPassword
) {
	return await bcrypt.compare(newUserPassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (jwtTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return jwtTimestamp < changedTimestamp;
	}

	// not changed
	return false;
};

userSchema.methods.createPasswordResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString("hex");

	this.passwordResetToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");

	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

	return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

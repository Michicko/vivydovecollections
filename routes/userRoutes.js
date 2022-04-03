const express = require("express");
const {signUp, login, protect, restrictTo, resetPassword, forgotPassword, updatePassword, logout} = require("../controllers/authControllers");
const {
	getUsers,
	getUser,
	updateUser,
	deleteUser,
	updateMe,
	deleteMe,
	getMe,
} = require("../controllers/userControllers");

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/logout', logout);

router.post('/forgotpassword', forgotPassword);
router.patch('/resetpassword/:token', resetPassword);

router.patch('/updatemypassword', protect, updatePassword);
router.get('/getme', protect, getMe, getUser);
router.patch('/updateme', protect, updateMe);
router.delete('/deleteme', protect, deleteMe);

router.route("/").get(protect, restrictTo('admin'), getUsers)

router
	.route("/:id")
	.get(protect, restrictTo("admin"), getUser)
	.patch(protect, restrictTo("admin"), updateUser)
	.delete(protect, restrictTo("admin"), deleteUser);


module.exports = router;
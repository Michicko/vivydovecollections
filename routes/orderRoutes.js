const express = require('express');
const { protect } = require('../controllers/authControllers');
const { getCheckoutSession } = require('../controllers/orderControllers');

const router = express.Router();

router.get("/checkout-session", protect, getCheckoutSession);


module.exports = router;
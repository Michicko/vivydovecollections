const express = require('express');
const morgan = require('morgan');
const rateLimit = require("express-rate-limit").default;
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const app = express();
const cors = require("cors");


const globalErrorHandler = require('./controllers/errorControllers');

// cors
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true, //access-control-allow-credentials:true
	})
);

// set security http headers
app.use(helmet());

// log http request in production
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

// limit access by ip
const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 150, // Limit each IP to 150 requests per `window` (here, per 1hr minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  message: "Too many requests from this IP, please try again in an hour!"
});

app.use('/api', limiter);

// body parser, reading data from the body req.body
app.use(cookieParser());
app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({ extended: true }));

// data sanitization against nosql query injection
app.use(mongoSanitize());

// data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Routers
const productRouter = require('./routes/productRoutes');
const productOptionRouter = require('./routes/productOptionRoutes');
const blogRouter = require('./routes/blogRoutes');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/products', productRouter);
app.use('/api/v1/productOptions', productOptionRouter);
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

app.use(globalErrorHandler);

module.exports = app;
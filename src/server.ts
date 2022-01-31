const path = require('path')

// Patches
import { inject, errorHandler } from "express-custom-error"
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
import env from "mandatoryenv"
import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from "cors"
import helmet from "helmet"


import logger from "./util/logger"


// Load .env Enviroment Variables to process.env

env.load([
    'PORT'
]);


const { PORT } = process.env;

// Instantiate an Express Application

const app = express();
app.use(express.static(path.join(__dirname, '../front/build')))


// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

// Configure custom logger middleware
app.use(logger.dev, logger.combined);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(helmet());

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})

// Assign Routes
import router from "./routes/router"
app.use('/', router);

// Handle errors
// app.use(errorHandler());
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../front/build/index.html'))
// })
// Handle not valid route
//app.use('*', (req, res) => {
//    res
//    .status(404)
//    .json( {status: false, message: 'Endpoint Not Found'} );
//})

// Open Server on configurated Port

app.listen(
    PORT,
    () => console.info('Server listening on port ', PORT)
);

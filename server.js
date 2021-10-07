import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import pizzasRouter from './routes/pizzasRouter.js';
import ordersRouter from './routes/ordersRouter.js';
import config from './config/config.js'

const app = express();
const {connect} = mongoose;
dotenv.config();


// * LISTEN
const port = 5000;
app.listen(port, () => {
  console.log(`Pizzeria app listening at http://localhost:${port}`);
});


// * MONGOOSE CONFIG
connect(config.mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(() => console.log(`Connection to DB established.`))
.catch((err) => {
  console.log(`Connection to DB couldn't be established:`, err);
});


// * EXPRESS MIDDLEWARE
app.use(express.json());
app.use(cors({origin: config.frontendOrigin}));


// * ENDPOINTS
app.get('/', (req, res)=> {
  res.send({message: `Welcome to Griselda's Pizzeria`});
});
app.use('/pizzas', pizzasRouter);
app.use('/orders', ordersRouter);



//* ANY OTHER ROUTE
app.use((req, res, next) => {
  const error = new createError(400, `This page doesn't exist.`);
  next(error);
});


//* ERROR HANDLING
app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 400).send({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});
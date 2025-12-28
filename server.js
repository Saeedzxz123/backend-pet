const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB `);
});


/* -----controller----- */

const petCtrl = require('./controllers/pets')

/* middlewae */

app.use(express.json());
app.use(morgan('dev'));


app.use('/pets',petCtrl)








// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});

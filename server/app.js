const express = require('express');
const morgan = require('morgan');
const recipeRouter = require('./routers/recipeRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/recipe', recipeRouter);
//app.use('api/v1/users', )

module.exports = app;


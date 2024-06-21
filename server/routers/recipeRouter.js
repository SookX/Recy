const recipeController = require('../controllers/recipeController');
const express = require('express');

const recipeRouter = express.Router()

recipeRouter.route('/').post(recipeController.addRecipe);
recipeRouter.route('/:id')

module.exports = recipeRouter;
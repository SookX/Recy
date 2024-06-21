const recipeController = require('../controllers/recipeController');
const express = require('express');

const recipeRouter = express.Router()

recipeRouter.route('/').post(recipeController.addRecipe).get(recipeController.viewRecipes);
recipeRouter.route('/:id').patch(recipeController.updateRecipe).delete(recipeController.removeRecipe).get(recipeController.viewRecipe);

module.exports = recipeRouter;
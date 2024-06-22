const Recipe = require('../schemas/recipeSchema')
const sucFunc = require('../utils/sucFunc');
const errFunc = require('../utils/errFunc');

exports.addRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        sucFunc(200, res, newRecipe);
    }catch(err) {
        errFunc(res, err);
    }

}

exports.viewRecipes = async (req, res) => {
    try {
        const sortType = req.query.sort;
        delete req.query.sort;
        const recipes = await Recipe.find(req.query).sort(sortType);

        sucFunc(200, res, recipes);
    }catch(err) {
        errFunc(res, err);
    }

}

exports.updateRecipe = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {returnDocument: "after"});
        sucFunc(200, res, updatedRecipe);
    }catch(err) {
        errFunc(res, err);
    }
}

exports.removeRecipe = async (req, res) => {
    try {
        const id = req.params.id;
        await Recipe.findByIdAndRemove(id);
        sucFunc(200, res, NaN);
    }catch(err) {
        errFunc(res, err);
    }
}

exports.viewRecipe = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        sucFunc(200, res, recipe);
    }catch(err) {
        errFunc(res, err);
    }
}
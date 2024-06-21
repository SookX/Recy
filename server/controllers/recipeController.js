const Recipe = require('../schemas/recipeSchema')

exports.addRecipe = async (req, res) => {
    const newRecipe = await Recipe.create(req.body)
    res.status(200).json({
        message: "Successful"
    })
}
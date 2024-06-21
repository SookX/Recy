const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A recipe must have a name']
    },
    description: String,
    rating: {
        type: Number,
        default: 4
    } 
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
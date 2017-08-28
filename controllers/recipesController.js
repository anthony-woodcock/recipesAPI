var Recipe = require('../models/Recipe')

function recipesController (app) {

    app.post('/recipes', function( req, res){
        var recipe = Recipe(req.body)
        console.log('posted to recipes')
        console.log(req.body)
        recipe.save(function (error, savedRecipe){
            console.log('got to the callback')
            if (error){
                res.send({
                    error: 'Unable to perform request. An error occured.'
                })
                return 
            }
                res.send({_id: savedRecipe._id})
        })
    })
}

module.exports = recipesController
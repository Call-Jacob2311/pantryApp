const recipeModels = require("../models/recipesModel.js");

function search(req, res) {
    // TODO: check if recipe id or pantryItem id and call the appropriate function
    
    //var recipeId; // TODO: comes from the query
    
    //recipeModels.searchByRecipe(recipeId, function(results) {
    //    res.json(results);
    //});
    
    var name = req.query.name;
    recipeModels.searchByItemName(name, function(results) {
        res.json(results);
    });
}

function searchRecipe(req, res) {
    // TODO: check if recipe id or pantryItem id and call the appropriate function
    
    //var recipeId; // TODO: comes from the query
    
    //recipeModels.searchByRecipe(recipeId, function(results) {
    //    res.json(results);
    //});
    
    var expirationMonth = req.query.expirationMonth;
    recipeModels.searchByExpirationMonth(expirationMonth, function(results) {
        res.json(results);
    });
}

function searchRecipeYear(req, res) {
    // TODO: check if recipe id or pantryItem id and call the appropriate function
    
    //var recipeId; // TODO: comes from the query
    
    //recipeModels.searchByRecipe(recipeId, function(results) {
    //    res.json(results);
    //});
    
    var expirationYear = req.query.expirationYear;
    recipeModels.searchByExpirationYear(expirationYear, function(results) {
        res.json(results);
    });
}

function searchRecipeName(req, res) {
    // TODO: check if recipe id or pantryItem id and call the appropriate function
    
    //var recipeId; // TODO: comes from the query
    
    //recipeModels.searchByRecipe(recipeId, function(results) {
    //    res.json(results);
    //});
    
    var recipeName = req.query.recipeName;
    recipeModels.searchByRecipeName(recipeName, function(results) {
        res.json(results);
    });
}

function getRecipeList(req, res) {
    
    console.log("Getting all recipes...");
    
    recipeModels.getAllRecipes(function(results) {
        res.json(results);
    });
}

function getRecipe(req, res) {
        var id = 1;
        recipeModels.getRecipeById(id, function(results) {
        res.json(results);
    });
}

function insertNewRecipe(req, res) {
    var name = req.body.name;
    var ingrediants = req.body.ingrediants;
    var instructions = req.body.instructions;
    
    console.log("posting a new Pantry item with name: " + name);
    
    recipeModels.insertNewRecipe(name, ingrediants, instructions, function(error, results) {
        res.json(results);
    });
}

module.exports = {
    search: search,
    searchRecipe: searchRecipe,
    searchRecipeYear: searchRecipeYear,
    searchRecipeName: searchRecipeName,
    getRecipeList: getRecipeList,
    getRecipe: getRecipe,
    insertNewRecipe: insertNewRecipe
};

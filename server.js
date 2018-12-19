// Use the express library
const express = require("express");

// GET the directory path
const path = require("path");

// Creation of the database enviorment variable
require('dotenv').config();


// GET pantry controller js file
const pantryController = require("./controllers/pantryController.js");
const recipeController = require("./controllers/recipeController.js");

// Get the Heroku Port. OR. Send them to local.
const PORT = process.env.PORT || 5000;

// Create node application
var app = express();

// Set up static files to be rendered to the user.
app.use(express.static(path.join(__dirname, "public")));

// How to use CSS sheet
app.use(express.static(__dirname + '/public'));

app.use(express.json());  // Support JSON encoded bodies
app.use(express.urlencoded({extended: true})); // Support URL encoded bodies


/*****************************
* GET REQUESTS
******************************************/
app.get("/pantryItems", pantryController.getPantryList);
app.get("/pantryItem", pantryController.getPantryItem);

app.get("/search", recipeController.search);
app.get("/searchRecipe", recipeController.searchRecipe);
app.get("/searchRecipeYear", recipeController.searchRecipeYear);
app.get("/searchRecipeName", recipeController.searchRecipeName);
app.get("/recipes", recipeController.getRecipeList);
app.get("/recipe", recipeController.getRecipe);

/*****************************
* POST REQUESTS
******************************************/
app.post("/recipe", recipeController.insertNewRecipe);
app.post("/pantryItem", pantryController.postPantryItem);


/*****************************
* PORT LISTEN (ex. 8080, 5000)
******************************************/
app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT);
}); 
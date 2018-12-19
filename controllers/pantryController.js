const pantryModels = require("../models/pantryModel.js");

/*****************************
* GET REQUESTS
******************************************/

function getPantryList(req, res) {
    // /pantryItems?id=1
    
    // Get a list of all pantry item from the database
    console.log("Getting all pantry items...");
    
    pantryModels.getAllPantryItems(function(error, results) {
        res.json(results);
    });
    
    
}

function getPantryItem(req, res) {
    // Use following params if you want to get data using pantryItem?name=Cereal
     var name = req.query.name;
    
    // Use following params if you want to get data using pantryItem?id=1
     var id = req.query.id;
    
    /*
    -- app.get("/pantryItem/:id"), function(req, res)
    -- Now when we use the GET we can use pantryItem/Cereal
    -- Most APIS do it this way?
    -- 
    -- var id = req.params.id;
    -- var name = req.params.name;
    */
    
    // Search for a pantry item specifily by name
    console.log("Getting " + name + "...");
    
    pantryModels.getItemById(id, function(error, results) {
        res.json(results);
    });
}

/*****************************
* POST REQUESTS
******************************************/

function postPantryItem(req, res) {
    var name = req.body.name;
    var expirationMonth = req.body.expirationMonth;
    var expirationYear = req.body.expirationYear;
    
    console.log("posting a new Pantry item with name: " + name);
    
    pantryModels.insertNewItem(name, expirationMonth, expirationYear, function(error, results) {
        res.json(results);
    });
}

/*****************************
* EXPORT THE FUNCTIONS
******************************************/
module.exports = {
    getPantryList: getPantryList,
    getPantryItem: getPantryItem,
    postPantryItem: postPantryItem
};
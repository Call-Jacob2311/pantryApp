// Access the database and create an enviorment variable
const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString : db_url});

function searchByRecipe(recipeId, callback) {
    var results = {list:[{id:1, name:"brownies", ingrediants:"eggs, milk, butter", instructions:"do it boy"},
    {id:2, name:"cookies", ingrediants:"flour, milk, butter", instructions:"yes yes yes"},
    {id:3, name:"mamas toast", ingrediants:"toast, milk, butter", instructions:"500 degrees for 50 minutes"}]};
    
    callback(results);
}

function searchByExpirationMonth(expirationMonth, callback) {
    console.log("GetSearching the DB for items that expire in: " + expirationMonth);
    
    var sql = "SELECT id, name, expirationMonth FROM item WHERE expirationMonth=$1::text";
    var params = [expirationMonth];
    
    pool.query(sql, params, function(err, db_results) {
        
        if (err) {
            throw err;
        } else {
            // We got successful results from the DB
            console.log("Back from the DB with: ");
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows
            };

            callback(results);
        }
    });
}

function searchByExpirationYear(expirationYear, callback) {
    console.log("GetSearching the DB for items that expire in: " + expirationYear);
    
    var sql = "SELECT id, name, expirationYear FROM item WHERE expirationYear=$1::integer";
    var params = [expirationYear];
    
    pool.query(sql, params, function(err, db_results) {
        
        if (err) {
            throw err;
        } else {
            // We got successful results from the DB
            console.log("Back from the DB with: ");
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows
            };

            callback(results);
        }
    });
}

function searchByRecipeName(recipeName, callback) {
    console.log("GetSearching the DB for recipe: " + recipeName);
    
    var sql = "SELECT id, name, ingrediants, instructions FROM recipe WHERE name=$1::text";
    var params = [recipeName];
    
    pool.query(sql, params, function(err, db_results) {
        
        if (err) {
            throw err;
        } else {
            // We got successful results from the DB
            console.log("Back from the DB with: ");
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows
            };

            callback(results);
        }
    });
}



function searchByItemName(name, callback) {
    console.log("GetSearching the DB for item: " + name);
    
    var sql = "SELECT id, name, expirationMonth, expirationYear FROM item WHERE name=$1::text";
    var params = [name];
    
    pool.query(sql, params, function(err, db_results) {
        
        if (err) {
            throw err;
        } else {
            // We got successful results from the DB
            console.log("Back from the DB with: ");
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows
            };

            callback(results);
        }
    });
}

function getAllRecipes(callback) {
    var results = {list:[{id:1, name:"brownies", ingrediants:"eggs, milk, butter", instructions:"do it boy"},
    {id:2, name:"cookies", ingrediants:"flour, milk, butter", instructions:"yes yes yes"},
    {id:3, name:"mamas toast", ingrediants:"toast, milk, butter", instructions:"500 degrees for 50 minutes"}]};
    
    callback(results);
}

function getRecipeById(id, callback) {
    var results = {id:1, name:"brownies", ingrediants:"eggs, milk, butter", instructions:"do it boy"};
    
    callback(results);
}

function insertNewRecipe(name, ingrediants, instructions, callback) {
    // Create a new item in the DB with the provided variables
    console.log("Adding: " + name + "to the database");
    
    var sql = "INSERT INTO recipe (name, ingrediants, instructions) VALUES ($1::text, $2::text, $3::text)";
    var params = [name, ingrediants, instructions];
    
    pool.query(sql, params, function(err, db_results) {
        
        if (err) {
            throw err;
        } else {
            // We got successful results from the DB
            console.log("Back from the DB with: ");
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows
            };

            callback(results);
        }
    });
}

module.exports = {
    searchByRecipe: searchByRecipe,
    searchByExpirationMonth: searchByExpirationMonth,
    searchByExpirationYear: searchByExpirationYear,
    searchByRecipeName: searchByRecipeName,
    searchByItemName: searchByItemName,
    getAllRecipes: getAllRecipes,
    getRecipeById: getRecipeById,
    insertNewRecipe: insertNewRecipe
};

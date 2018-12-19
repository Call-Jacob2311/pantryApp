// Access the database and create an enviorment variable
const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString : db_url});

/*****************************
* GET REQUESTS
******************************************/
function getAllPantryItems(callback) {
    // Get all the items in the users pantry from the DB
    
    var sql = "SELECT name, expirationMonth, expirationYear FROM item";
    
    pool.query(sql, function(err, db_results) {
        
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

function getItemById(id, callback) {
    // Get item from the pantry that matches the ID from the DB
    
    var results = {id:id, name:"Cheerios", expirationMonth:"April", expirationYear:2020};
    
    callback(null, results);
}

/*****************************
* POST REQUESTS
******************************************/

function insertNewItem(name, expirationMonth, expirationYear, callback) {
    // Create a new item in the DB with the provided variables
    console.log("Adding: " + name + "to the database");
    
    var sql = "INSERT INTO item (name, expirationMonth, expirationYear) VALUES ($1::text, $2::text, $3::integer)";
    var params = [name, expirationMonth, expirationYear];
    
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

/*****************************
* EXPORT THE FUNCTIONS
******************************************/
module.exports = {
    getAllPantryItems: getAllPantryItems,
    getItemById: getItemById,
    insertNewItem: insertNewItem
};
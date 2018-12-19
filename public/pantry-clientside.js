function searchByItem() {
    console.log("Searching by item name...");
    
    var name = $("#name").val();
    console.log("Item: " + name);
    
    $.get("/search", {name:name},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];
            
            $("#ulItems").append("<li>" + item.name + " " + item.expirationmonth + " " + item.expirationyear + "</li>"); 
        }
    })
}

function searchByRecipe() {
    console.log("Searching by item name...");
    
    var recipeName = $("#recipeName").val();
    console.log("Recipe: " + recipeName);
    
    $.get("/searchRecipeName", {recipeName:recipeName},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];
            
            $("#ulItems").append("<li>" + item.name + " " + item.ingrediants + " " + item.instructions + "</li>"); 
        }
    })
}

function searchByExpirationMonth() {
    console.log("Searching by expiration month...");
    
    var expirationMonth = $("#expirationMonth").val();
    console.log("expirationMonth: " + expirationMonth);
    
    $.get("/searchRecipe", {expirationMonth:expirationMonth},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];
            
            $("#ulItems").append("<li>" + item.name + " " + item.expirationmonth + "</li>"); 
        }
    })
}

function searchByExpirationYear() {
    console.log("Searching by expiration year...");
    
    var expirationYear = $("#expirationYear").val();
    console.log("expirationYear: " + expirationYear);
    
    $.get("/searchRecipeYear", {expirationYear:expirationYear},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];
            
            $("#ulItems").append("<li>" + item.name + " " + item.expirationyear + "</li>"); 
        }
    })
}

function addItem() {
    console.log("Adding a item to the pantry...");
    var name = $("#itemName").val();
    var expirationMonth = $("#exMonth").val();
    var expirationYear = $("#exYear").val();
    
    $.post("/pantryItem", {name:name, expirationMonth:expirationMonth, expirationYear:expirationYear},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
    })
    $("#added").append("<span style='color: black'>You have added " + name + " to the database." + "</span><br/><br/>");
}

function addRecipe() {
    console.log("Adding a Recipe to the pantry...");
    var name = $("#recipeName").val();
    var ingrediants = $("#ingrediants").val();
    var instructions = $("#instructions").val();
    var date = new Date();
    
    $.post("/recipe", {name:name, ingrediants:ingrediants, instructions:instructions},function(data) {
        console.log("Back from the server with: ");
        console.log(data);
    })
    $("#added").append("<span style='color: black;'>You have added " + name + " to the database." + "</span><br/>" + date + "<br/><br/>");
}

function showPantryList() {
    console.log("Retreiving Pantry List...");
    
    $.get("/pantryItems",function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0; i < data.list.length; i++) {
            var item = data.list[i];
            
            $("#ulItems").append("<li>" + item.name + " " + item.expirationmonth + " " + item.expirationyear + "</li>"); 
        }
    })
}


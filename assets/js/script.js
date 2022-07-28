//variables to target specific parts of the HTML
var dateInput = $("#expiration-date");
var ingredientInput = document.getElementById("food-stuffs");


//when ingredient input is filled out, and user clicks "check fridge"
//this code will save the input into local storage.
$("#check-fridge").click(function(){

    event.preventDefault();
    if(localStorage.getItem("food")){
        var foodList = localStorage.getItem("food")
        foodList += (","+ingredientInput.value)
        console.log(foodList)
    }
     localStorage.setItem("food", foodList);
    //clears text in the #food-stuffs input field.
     $("#food-stuffs").val(" ")
    location.replace("fridge.html")
    
})

var recipeIngredients = document.getElementById("ingredientInput");

$("#find-recipe").click(function(event){
    event.preventDefault();
    console.log(recipeIngredients.value)
    //debugger
    localStorage.setItem("final-ingredient", recipeIngredients.value);
    $("#ingredientInput").val(" ")
    location.replace("recipe.html")
})

//code to get a random number that will be used with the Rick And Morty API to get a random image to load
//everytime the page loads.

var randomNumber = Math.floor(Math.random()*826)+1
console.log("the random number is "+randomNumber);
var rickAndMortyApiUrl= "https://rickandmortyapi.com/api/character"
var finalApirUrl=  rickAndMortyApiUrl+"/avatar/"+randomNumber+".jpeg"
//making a request to the API url.
fetch(rickAndMortyApiUrl).then(function(response){
    if(response.ok){response.json().then(function(){
    var pictureFrame = document.createElement('div');
    document.body.appendChild(pictureFrame);

    let rickImage=document.createElement('img');
    rickImage.src="https://rickandmortyapi.com/api/character/avatar/"+randomNumber+".jpeg";
    pictureFrame.appendChild(rickImage);

    })

    }else{
        var errorFrame=document.createElement('div');
        var errorMessage=document.createTextNode("Something Went Sideways at the Server, Sorry!")
        errorFrame.appendChild(errorMessage);
        document.body.appendChild(errorFrame);
    }
})


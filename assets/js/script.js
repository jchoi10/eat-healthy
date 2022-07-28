//variables to target specific parts of the HTML
var dateInput = $("#expiration-date");
var ingredientInput = document.getElementById("food-stuffs");


//when ingredient input is filled out, and user clicks "check fridge"
//this code will save the input into local storage.
$("#put-in-fridge").click(function(event){

    event.preventDefault();
    var foodList = localStorage.getItem("food");

    if(foodList){
        foodList += (","+ingredientInput.value);
        console.log(foodList);
    }
    else {
        foodList = ingredientInput.value
    }
    localStorage.setItem("food", foodList);
    //clears text in the #food-stuffs input field.
     $("#food-stuffs").val(" ")
    //location.replace("fridge.html") 
})
$("#check-fridge").click(function(event){
    event.preventDefault();
    location.replace("fridge.html");
})

// code for My Fridge Page
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

//var randomNumber = Math.floor(Math.random()*826)+1
//console.log("the random number is "+randomNumber);
//var rickAndMortyApiUrl= "https://rickandmortyapi.com/api/character/"+randomNumber;


/*
//making a request to the API url.
fetch(rickAndMortyApiUrl).then(function(response){
    if(response.ok){response.json().then(function(character){
        console.log(character);
        var pictureFrame = document.createElement('div');
        document.querySelector("#rick").appendChild(pictureFrame);
        let rickImage=document.createElement('img');
        rickImage.src=character.image;
        pictureFrame.appendChild(rickImage);

    })

    }else{
        //if the server is down, or there is a problem with fetching, using DOMs this will create a div with a message inside it that tells the user an error has occured.
        var errorFrame=document.createElement('div');
        var errorMessage=document.createTextNode("Something Went Sideways at the Server, Sorry!")
        errorFrame.appendChild(errorMessage);
        document.body.appendChild(errorFrame);
    }
})
*/

var foodNames = $('#forFridgeFood');

var fridgeFood = localStorage.getItem("food");

const ingredientGroup = fridgeFood.split(", ")

function makeButton (list) {
    var btn2 = document.createElement('button');
    btn2.classList.add('btn','pink', 'text-white');
    btn2.setAttribute("id", "magic-food")
    btn2.innerText = list;
    return btn2
};

for (var i = 0; i<ingredientGroup.length; i++) {
    var newIngredient = makeButton(ingredientGroup[i])
    foodNames.append(newIngredient);
}

$(btn2).on('click', function() {
    displayDetails(res.summary); 
    displayImage(image);
})

// var finalFoodInputEl = document.getElementById('magic-food').textContent
// console.log(finalFoodInputEl)

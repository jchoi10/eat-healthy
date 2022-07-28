//variables to target specific parts of the HTML
var dateInput = $("#expiration-date");
var ingredientInput = document.getElementById("food-stuffs");


//when ingredient input is filled out, and user clicks "check fridge"
//this code will save the input into local storage.
$("#check-fridge").click(function(event){

    event.preventDefault();
    if(localStorage.getItem("food")){
        var foodList = localStorage.getItem("food")
        foodList += (","+ingredientInput.value)
        console.log(foodList)
    }
     localStorage.setItem("food", foodList);
    //clears text in the #food-stuffs input field.
     $("#food-stuffs").val(" ")
    //location.replace("fridge.html")
    
})

var recipeIngredients = document.getElementById("ingredientInput");

$("#find-recipe").click(function(event){
    event.preventDefault();
<<<<<<< HEAD
=======
    console.log(recipeIngredients.value)
    //debugger
>>>>>>> 317f4b508756191f260c9e347db74d4461b46df0
    localStorage.setItem("final-ingredient", recipeIngredients.value);
    $("#ingredientInput").val(" ")
    location.replace("recipe.html")
})

<<<<<<< HEAD
var entryImage = $(#front-image-view)







fetch('https://rickandmortyapi.com/api/character')
.then(res => {
    return res.json()
})
.then(res => {
    console.log(res);
})

function ranNumber (min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}

console.log(ranNumber(0,827))

function showImage (image) {
    // var imageURL = 'https://rickandmortyapi.com/api/character/avatar/' + ranNumber(0,827) + '.jpeg'
    
    frontImage(image)
}

function frontImage (image) {
    var frontImageViewer = $('#front-image-view');
    frontImageViewer.attr('src',image);
}
=======
//code to get a random number that will be used with the Rick And Morty API to get a random image to load
//everytime the page loads.

var randomNumber = Math.floor(Math.random()*826)+1
console.log("the random number is "+randomNumber);
var rickAndMortyApiUrl= "https://rickandmortyapi.com/api/character/"+randomNumber;

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

//using DOMs, following code will create a div, and image. then it will append image to div, then append the div to html body.
//var pictureFrame = document.createElement('div');
//document.body.appendChild(pictureFrame);
//let rickImage=document.createElement('img');
//rickImage.src="https://rickandmortyapi.com/api/character/avatar/"+randomNumber+".jpeg";
//pictureFrame.appendChild(rickImage);
>>>>>>> 317f4b508756191f260c9e347db74d4461b46df0

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
    //code to save food and date to locaStorage.
    localStorage.setItem("food", foodList);
    //localStorage.setItem("Expiration Date", dateInput.value);
    //$("#expiration-date").val(" ");
    $("#food-stuffs").val(" ")
    
})

/*
//expiration date input was clicked.
$("#expiration-date").on("click", function(){
    
    //enables jquery datepicker.
    dateInput.datepicker({
        minDate: 1,
        onClose: function(){
            //when calenddar is closed, updates the date.
            $(this).trigger("change")
        }
    })
    
    //automatically brings up calendar.
    dateInput.trigger("focus");
})
*/
var recipeIngredients = document.getElementById("ingredientInput");

$("#find-recipe").click(function(event){
    event.preventDefault();
    localStorage.setItem("final-ingredient", recipeIngredients.value);
    $("#ingredientInput").val(" ")
    location.replace("recipe.html")
})

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
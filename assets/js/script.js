//variables to target specific parts of the HTML
var dateInput = $("#expiration-date");
var ingredientInput = document.getElementById("food-stuffs");


//when ingredient input is filled out, and user clicks "check fridge"
//this code will save the input into local storage.
$("#check-fridge").click(function(){
    event.preventDefault();
    
    //code to save food and date to locaStorage.
    localStorage.setItem("food", ingredientInput.value);
    localStorage.setItem("Expiration Date", dateInput.value);
    $("#expiration-date").val(" ");
    $("#food-stuffs").val(" ")
    
})

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



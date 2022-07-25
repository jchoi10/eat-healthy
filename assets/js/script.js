
//when ingredient input is filled out, and user clicks "check fridge"
//this code will save the input into local storage.
$("#check-fridge").click(function(){
    event.preventDefault();
    console.log("does this thing work?")
    ingredientInputArray=[]
    var ingredientInput = document.getElementById("food-stuffs");
    localStorage.setItem("food", ingredientInput.value);
    $("#food-stuffs").text(" ")
})


//expiration date input was clicked.
$("#expiration-date").on("click", function(){
    var dateInput = $("#expiration-date");
    
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




$("#check-fridge").click(function(){
    event.preventDefault();
    console.log("does this thing work?")
    var ingredientInput = document.getElementById("food-stuffs");
    localStorage.setItem("food", ingredientInput.value);

})
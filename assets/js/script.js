// let call1 = null
// fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=873c6628dea5448a91cb72febe1f297e')
// .then(res => {
//     return res.json()
// })
// .then(function(meals){
//     const data = {
//         "ingredients": [meals[0].usedIngredients[0].original]
//     }
//     fetch('"https://sandbox.zestfuldata.com/parseIngredients', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => {
//         console.log('erroring out here')
//         console.log(res)
//         return res.json()
//     })
//     .then(parsedIngredients => {
//         console.log(parsedIngredients)
//     })
// })

var urlParams = new URLSearchParams(window.location.search);
var recipeNames = $('#recipe-names');
// var menus = ['ramen', 'pasta', 'bap'];

function createButton (menu) {
    var btn1 = document.createElement('button');
    btn1.innerText = menu;
    return btn1
};

var recipeListUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
            urlParams.get('ingredient') + '&number=2&apiKey=873c6628dea5448a91cb72febe1f297e'

fetch(recipeListUrl)
//fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=873c6628dea5448a91cb72febe1f297e')
.then(res => {
    return res.json()
})
.then(res => {
        for (var i = 0; i<res.length; i++) {
            var newButton = createButton(res[i].title)
            recipeNames.append(newButton);
            setOnclick(newButton, res[i].id, res[i].image);
        }
    } 
)

function setOnclick (btn1, id, image) {
    var detailUrl = 'https://api.spoonacular.com/recipes/' + id + '/summary' + '?apiKey=873c6628dea5448a91cb72febe1f297e'
    fetch(detailUrl)
    .then(res => {
        return res.json()
    })
    .then(res => {
        // btn1.addEventListener('click', function() {
        $(btn1).on('click', function() {
            displayDetails(res.summary); 
            displayImage(image);
        })
    });
}

function displayDetails(summary){
    var detailViewer = $('#detail-viewer');
    detailViewer.html(summary);
}

function displayImage (image) {
    var detailImageViewer = $('#detail-image-viewer');
    detailImageViewer.attr('src',image);
}
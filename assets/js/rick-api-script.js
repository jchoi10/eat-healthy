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

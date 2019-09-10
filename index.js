function watchForm() {
    $('.form-container').on('submit', '.dog-form', fetchDogs );    
}

function fetchDogs() {
    event.preventDefault();
    emptyDisplay();    
    let dogBreed = $('.input-dogBreed').val().toLowerCase();
    // if (dogBreed > 0 && dogBreed < 51) {
        fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then(response =>  {
                if (response.ok) { 
                    return response.json();
                }
                throw new Error(response.statusText);
            })            
            .then(responseJson => displayDogs(responseJson))
            .catch(err => displayError()); //displayError(err.message));
        // } else { alert("You must enter a number between 1 and 50")}

}

// function logDogs(responseJson) {
//     for (let dog in responseJson.message) {
//         console.log(`${responseJson.message[dog]}`);
//     }  
// }

function displayError(errorText) {
    emptyDisplay();
    // $('.dog-display').addClass('error-text')
    $('.dog-display').append('That breed was not found. Pleast try another.')
}

function emptyDisplay() {
    $('.dog-display').empty();
}

function displayDogs(responseJson) {
    // console.log(responseJson.message);
    // logDogs(responseJson);
    // let sectionHTML = ""    
    // for (let dog in responseJson.message) {
    $('.dog-display').append(`<img src="${responseJson.message}" alt="random dog image">`)
    // } 
    // // let sectionHTML = ``
    }
    


$(watchForm);
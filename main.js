// Array of actor/actress names to be randomly selected
const namesArray = [
    "Harrison Ford",
    "Brad Pitt",
    "Mark Hamill",
    "Keanu Reeves",
    "Will Smith",
    "Chris Pratt",
    "Tom Cruise",
    "Hugh Jackman",
    "Chris Hemsworth",
    "Jeff Goldblum"
];

// Array of sci-fi movies to be randomly selected
const moviesArray = [
    "Star Wars",
    "Back to the Future",
    "Blade Runner",
    "The Matrix",
    "Avatar",
    "Interstellar",
    "Inception",
    "The Terminator",
    "E.T. the Extra-Terrestrial",
    "Jurassic Park"
]

// Array of random facts to be radomly selected
const factsArray = [
    "once moonwalked on Mars just for fun",
    "can communicate with aliens using Morse code",
    "invented a time machine but misplaced it",
    "can speak fluent Klingon and Wookiee",
    "has a secret laboratory on the dark side of the moon",
    "participated in zero-gravity dance competitions",
    "holds the record for most light-years traveled in a day",
    "has a pet robot named Sparky",
    "discovered a parallel universe during lunch break",
    "wrote a symphony for alien octopuses"]

let actor; 
let movie;
let fact;

// Create an empty array that will store all generated strings. Used to display in previous strings container
const generatedStrings = [];




// Assign HTML elements to variables
const prevStringContainer = document.querySelector('#prev-string-list-container');
const stringContainer = document.querySelector('#string-container');
const genBtn = document.querySelector('#generate-btn');

// Event listener - generate button click event
const genBtnEventListener = genBtn.addEventListener('click', () => {
    generateRandomString();
})


// Event handler (generate button click) - generate and display a new random string
const generateRandomString = () => {
    let randomNumber1 = Math.floor(Math.random() * namesArray.length);
    let randomNumber2 = Math.floor(Math.random() * moviesArray.length);
    let randomNumber3 = Math.floor(Math.random() * factsArray.length);

    actor = namesArray[randomNumber1];
    movie = moviesArray[randomNumber2];
    fact = factsArray[randomNumber3];

    let string = `Actor ${actor} from ${movie} ${fact}.`

    stringContainer.innerHTML = string;

    let storeString = document.createElement('li');
    storeString.classList.add('prev-string');

    storeString.innerText = string;
    prevStringContainer.appendChild(storeString);

    const previousStrings = document.querySelectorAll('.prev-string');
// Event listener - previously generated string click 
    previousStrings.forEach(prevString => {
            prevString.addEventListener('click', () => {

                // display the previously generated string 
                stringContainer.innerText = prevString.innerHTML;
        })
    });
    
};





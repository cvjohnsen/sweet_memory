// Add event when the DOM/HTML content is loaded
document.addEventListener('DOMContentLoaded', () => {
 //  Check now, comment out later
// console.log("DOM fully loaded and parsed"); 
// Add image cards oject arrays
const cardArr = [
{
    name: 'cakepop',
    img: 'image/cakepop.jpg'
},
{
    name: 'cakepop',
    img: 'image/cakepop.jpg'
},
{
    name: 'cupcake',
    img: 'image/cupcake.jpg'
},
{
    name: 'cupcake',
    img: 'image/cupcake.jpg'
},
{
    name: 'doughnuts',
    img: 'image/doughnuts.jpg'
}, 
{
    name: 'doughnuts',
    img: 'image/doughnuts.jpg'
},
{
    name: 'icecream',
    img: 'image/ice_cream.jpg' 
}, 
{
    name: 'icecream',
    img: 'image/ice_cream.jpg' 
},
{
    name: 'macarons',
    img: 'image/Macarons.jpg'
},
{
    name: 'macarons',
    img: 'image/Macarons.jpg'
},
{
    name: 'cake',
    img: 'image/slice_cake.jpg'
},
{
    name: 'cake',
    img: 'image/slice_cake.jpg'
}         
]
// Restart and randomize cards 
cardArr.sort(() => 0.5 - Math.random())
// Try both querySelector and getElementById (both works), set to = grid div
// let grid = document.querySelector('.grid')
const grid = document.getElementById('grid')
const resultDisplay = document.getElementById('results')
// Create empty array for chosen cards, Id, won
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
// Create grid game board function
function gameBoard() {
    // create for loop, to loop thru cards 
    for (let i=0; i < cardArr.length; i++){
        const card = document.createElement('img')
        // let card to img, set to sweet img
        card.setAttribute('src', 'image/sweet-500.jpg')
        card.setAttribute('data-id', i)
        // Invoke a card flip function
        card.addEventListener('click', cardFlip)
        grid.appendChild(card)
    }
}
// Check card match function
function cardMatch(){
    const cards = document.querySelectorAll('img')
    const card1Id = cardsChosenId[0]
    const card2Id = cardsChosenId[1]
    // Choose Cards 1 & 2
    if (cardsChosenId[0] === cardsChosenId[1]) {
        cards[card1Id].setAttribute('src', 'image/white.jpg')
        cards[card2Id].setAttribute('src', 'image/white.jpg')
        alert('Match!')
    }else if (cardsChosenId[0] === cardsChosenId[1]) {
        alert('You found a match!')
        cards[card1Id].setAttribute('src', 'image/white.jpg')
        cards[card2Id].setAttribute('src', 'image/white.jpg')
        // remove cards
        cards[card1Id].removeEventListener('click', cardFlip)
        cards[card2Id].removeEventListener('click', cardFlip)
        cardsWon.push(cardsChosen)
    } else {
        cards[card1Id].setAttribute('src', 'image/white.jpg')
        cards[card2Id].setAttribute('src', 'image/white.jpg')
        alert('Try again!') 
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    // Only flip 2
    if (cardsWon.length === cardArr.length /2) {
        resultDisplay.textContent = 'Yay, You Won!'
    }
}
// Card flip function
function cardFlip (){
    // Get Id from above
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArr[cardId].img)
    if (cardsChosen.length === 2) {
        // Check match and wait
        setTimeout(cardMatch, 500)
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 / 2, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};


gameBoard()
});
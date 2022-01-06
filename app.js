// Add event when the DOM/HTML content is loaded
document.addEventListener('DOMContentLoaded', () => {
 //  Check now, comment out later
console.log("DOM fully loaded and parsed"); 
});


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

// Try both querySelector and getElementById (both works), set to = grid div
// let grid = document.querySelector('.grid')
let grid = document.getElementById('grid')
// Create empty array for chosen cards
let cardsChosen= []


// Create grid game board function
function gameBoard() {
    // create for loop, to loop thru cards 
    for (let i=0; i < cardArr.length; i++){
        let card = document.createElement('img')
        // let card to img, set to cottoncandy img
        card.setAttribute('src', 'image/sweet-500.jpg')
        card.setAttribute('data-id', i)
        // Invoke a card flip
        // card.addEventListener('click', 'cardFlip')
        grid.appendChild(card)
    }
}
gameBoard()


// Check card match function

// Card flip function
function cardFlip (){
    // Get Id from above
    let cardId = this.getAttribute('data-id')

}





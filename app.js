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
// Try both querySelector and getElementById, set to grid
let grid = document.querySelector('.grid')

// Create grid game board
function gameBoard() {
    for (let i=0; i < cardArr.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'image/cottoncandy.jpg')
        card.setAttribute('data-id', i)
        // Invoke a card flip
        // card.addEventListener('click', 'flipcard')
        grid.appendChild(card)
    }
}
gameBoard()








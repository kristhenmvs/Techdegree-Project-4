/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Student: Kristhen Vidal Sainz.
*/

// To start the game when the 'start game' button has been clicked.
let game;
document.querySelector('#btn__reset').addEventListener('click', function(){
    game = new Game;
    game.startGame();
});

// Calls the 'handleInteraction' method for each clicked button on the on-screen keyboard.
const onScreenKeys = Array.from(document.querySelectorAll('.key'));
onScreenKeys.forEach( (e) => {
    e.addEventListener('click', function(){
        game.handleInteraction(e);
    })
});
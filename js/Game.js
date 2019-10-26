/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Stay wild moonchild'),
            new Phrase('I purple you'),
            new Phrase('You got no jams'),
            new Phrase('Kill them with success'),
            new Phrase('Bury them with a smile')
        ];
        this.activePhrase = 'null';
    }

    // To select a random quote from the quotes array
    getRandomPhrase(){
        let randomPhrase = Math.floor(Math.random() * game.phrases.length);
        return game.phrases[randomPhrase]

    }

    // To change from the start screen to the actual game. 
    // This method calls the 'getRandomPhrase'  and the 'addPhraseToDisplay' methods so the phrase is displayed on the screen.
    startGame(){
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // Checks if the user won the game with the last letter clicked.
    checkForWin(){
        const allLetters = document.querySelectorAll('.letter');
        const matchedLetters = document.querySelectorAll('.show');

        if (allLetters.length === matchedLetters.length){
            return true;
        } else {
            return false;
        }
    }

    // Removes a life if the letter clicked is not in the active phrase.
    removeLife(){
        this.missed += 1;
        const heart = document.querySelectorAll('.tries > img');
        heart[this.missed-1].src = 'images/lostHeart.png';
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // Displays the 'end game' screen, with a message that tells the user if they won or lost the game.
    // It also calls the 'reset game' method so the user can start over.
    gameOver(gameWon){
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = '';
        const gameOverMessage = document.querySelector('#game-over-message');
        startScreen.classList.remove('start');
        

        if (gameWon === true){
            gameOverMessage.innerHTML = 'Congratulations! You won!'
            startScreen.classList.remove('lose');
            startScreen.classList.add('win');
        } else {
            gameOverMessage.innerHTML = 'Aww, better luck next time!'
            startScreen.classList.add('lose');
            startScreen.classList.remove('win');
        }
        setTimeout(() => {this.resetGame()}, 500) 
    }

    // Method that handles the event listeners related to clicking the on screen keyboard.
    handleInteraction(button){
        button.disabled = true;

        if(this.activePhrase.checkLetter(button.textContent) === true){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin() === true){
                this.gameOver(true);
            }

        } else {
            this.removeLife();
            button.classList.add('wrong');

        }
    }

    // To reset the game. With this, the user can strat again with a 'blank canvas'.
    resetGame(){

        const phraseUl = document.querySelector('#phrase ul');
        const phraseLi = document.querySelectorAll('#phrase ul li')
        phraseLi.forEach(li => {
            phraseUl.removeChild(li);

        })

        const hearts = document.querySelectorAll('.tries > img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';

        })

        const buttons = document.querySelectorAll('.key');
        buttons.forEach(button => {
            button.classList.remove('wrong');
            button.classList.remove('chosen');
            button.disabled = false;

        })
    }

 }
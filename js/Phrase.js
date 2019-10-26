/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

  // So there's no case sensibility.
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  // To display the selected phrase on the screen.
  addPhraseToDisplay(){
    const phraseUl = document.querySelector('#phrase ul');
    const phraseToLetters = this.phrase.split("");
    phraseToLetters.forEach(letter => {
      const phraseLI= document.createElement('li');
      phraseUl.append(phraseLI);
          
      if(letter === " ") {
        phraseLI.className = "hide space";
      } else {
        phraseLI.className = `hide letter ${letter}`;
        phraseLI.innerHTML = letter;
      }
    })
  }

  // To check if the letter clicked is in the active phrase.
  checkLetter(letter){
    return this.phrase.includes(letter);
  }

  // If the letter clicked is in the active phrase, then the letter is displayed.
  showMatchedLetter(letter){
    if (this.checkLetter(letter) === true){
      const letters = document.getElementsByClassName(letter);
      Array.from(letters).forEach(letter => {
        letter.classList.remove('hide');
        letter.classList.add('show');
      
      })
    }
  }  

}
// Pressing a key goes to hangman screen
// Creat an array of possible words
var wordList = ['gift', 'santa', 'mistletoe', 'sleigh', 'merry', 'stocking']

// Randomly select a word from the array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var blanks = [];
var guessedLetters = '';
var MAX_GUESSES = 12;
var numberOfGuesses = MAX_GUESSES;
var winCount = 0;


console.log(randomWord);
// Create appropriate amount of blanks for the selected word
for(var i = 0; i < randomWord.length; i++) {
    blanks.push("_");
}
// Writes appropriate amount of blanks to html
document.getElementById('blanks').innerHTML = blanks.join(' ');
document.getElementById('guessesRemaining').innerHTML = 'Guesses remaining: ' +numberOfGuesses;

// Testing
console.log(randomWord.length);
console.log(blanks);
// Get user letter guess
document.addEventListener('keyup', function(event) {
    // Find out if the letter is in the word
    var patt = new RegExp("[a-z]");
    var userGuess = event.key.toLowerCase();
    if (!patt.test(userGuess) || (userGuess.length > 1)) return;

    if(randomWord.indexOf(userGuess) > -1) {
        // If the guess is correct, replace the blank with the letter 
        //AND add letter to guessed letters
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord.charAt(i) === userGuess) {
                blanks[i] = userGuess; // This needs to show up in place of the _ in html
                guessedLetters = guessedLetters + userGuess + ', '; // This needs to show up next to "Letters guessed: " in html
            }
        }

        numberOfGuesses--;

        document.getElementById('blanks').innerHTML = blanks.join(' ');
        document.getElementById('lettersGuessed').innerHTML = 'Letters guessed: ' + guessedLetters;
        document.getElementById('guessesRemaining').innerHTML = 'Guesses remaining: ' +numberOfGuesses;
        //Testing  
        console.log(event.key);
        console.log(blanks);
        console.log(guessedLetters);
    } else {
        // If the guess is incorrect, remove from guesses remaining 
        // AND add letter to guessed letters
        numberOfGuesses--;
        guessedLetters = guessedLetters + userGuess + ', ';

        document.getElementById('lettersGuessed').innerHTML = 'Letters guessed: ' + guessedLetters;
        document.getElementById('guessesRemaining').innerHTML = 'Guesses remaining: ' + numberOfGuesses;
        console.log(guessedLetters);
        console.log(numberOfGuesses);
    }
    gameRestart(randomWord);
});

function getNewWord() {
    var newRandomWord = wordList[Math.floor(Math.random() * wordList.length)];
    blanks = [];
    numberOfGuesses = MAX_GUESSES;
    guessedLetters = '';

    for(var i = 0; i < newRandomWord.length; i++) {
        blanks.push("_");
    }

    document.getElementById('blanks').innerHTML = blanks.join(' ');
    document.getElementById('lettersGuessed').innerHTML = 'Letters guessed: ' + guessedLetters;
    document.getElementById('guessesRemaining').innerHTML = 'Guesses remaining: ' +numberOfGuesses;
    return newRandomWord;
}

// When user wins, automatically randomize next word
function gameRestart(word) {
    var index = wordList.indexOf(word);
    //If they ran out of guesses, show word and randomize a new one
    if((numberOfGuesses <= 0)) {
        alert('You lose! Press ok to try another word.');
        wordList.splice(index, 1);
        randomWord = getNewWord();

    } else if(!blanks.includes('_')) {
        winCount++
        alert('You win! Press ok to play again.')
        wordList.splice(index, 1);
        document.getElementById('wins').innerHTML = 'Wins: ' + winCount;
        randomWord = getNewWord();
    }
    console.log(wordList);
    console.log(randomWord);
    console.log(blanks);
}
    

gameRestart();
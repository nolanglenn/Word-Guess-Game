// Pressing a key goes to hangman screen
// Creat an array of possible words
var wordList = ['gift', 'santa', 'mistletoe', 'sleigh', 'merry', 'stocking']
// Randomly select a word from the array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var blanks = [];
console.log(randomWord);
// Create appropriate amount of blanks for the selected word
for(var i = 0; i < randomWord.length; i++) {
    blanks.push("_");
}

console.log(randomWord.length);
console.log(blanks);
// Get user letter guess
document.addEventListener('keyup', function(event) {
    // What do we want it to do onkeyup?
    console.log(event.key);
});
// Find out if the letter is in the word
// If the guess is correct, replace the blank with the letter AND add letter to guessed letters
// If the guess is incorrect, remove from guesses remaining AND add letter to guessed letters
// When user wins, automatically randomize next word
// Write a function called guessingGame which returns a 
// function that allows you to guess a random whole number 
// between 0 and 99. Every time you create a new game, it should 
// select a new random number, and keep it secret from the player.
// Once the game has started, you can guess the number. The game 
// should tell you whether your guess is too high, too low, or correct.
// After a correct guess, the game ends.

// let game = guessingGame();
// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"

function guessingGame() {
    const ANS = Math.floor(Math.random() * 100)
    let gameOver = false
    let guesses = 0

    return function guess(num) {
        if (gameOver) return "The game is over, you already won"
        guesses++
        if(num === ANS) {
            gameOver = true
            const guess = guesses === 1 ? "guess" : "gueeses"
            return `You win! You found ${num} in ${guesses} ${guess}.`
        }
        if (num < ANS) return `${num} is too low!`
        if (num > ANS) return `${num} is too high!`
    }
}

module.exports = { guessingGame };

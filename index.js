const startGame = function () {

    const words = ["javascript", "function", "array", "loop", "variable"]

    const word = words[Math.floor(Math.random() * words.length)]

    let hiddenWords = Array(word.length).fill("_")

    let lives = 5
    let guessedLetters = []

    while (lives > 0 && hiddenWords.includes("_")) {
        alert(`Word: ${hiddenWords.join(" ")}`)
        alert(`Lives : ${lives}`)
        alert(`Guessed Letters ${guessedLetters.join(",")}`)

        let guess = prompt("Guess a letter:").toLowerCase()

        if (guessedLetters.includes(guess)) {
            alert("You already guessed that letter. Try a different one.")
            continue
        }

        guessedLetters.push(guess)

        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    hiddenWords[i] = guess
                }
            }
        }else{
            lives --
            alert("Wrong guess! You lost a life.")
        }

    }

    if(!hiddenWords.includes("_")){
        alert(`Congratulations! You guessed the word: ${word}`)
    }else{
        alert(`Game over! You correct word was: ${word}`)
    }
    if(confirm("Do you want to play again")){
        startGame()
    }
    else{
        alert("thanks for playing")
    }
}

startGame()
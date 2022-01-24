let userScore = 0;
let computerScore = 0;

function game() {
    const userChoice = document.getElementById('user-choice')
    let allUserChoices = document.querySelectorAll('.user-option')

    let options = ['rock', 'paper', 'scissors']
    const computerChoice = document.getElementById('computer-choice')

    const result = document.getElementById('round-result')

    const userScoreTxt = document.getElementById('your-score')
    const computerScoreTxt = document.getElementById('computer-score')

    function selection() {
        allUserChoices.forEach(item => {
            item.addEventListener('click', () =>{
                userChoice.innerHTML = `You chose ${item.id}`

                //Generate a diferent response each click

                let random = Math.floor(Math.random() * options.length)

                //Put that response in the output

                let computerText = `Computer chose ${options[random]}`;

                computerChoice.innerHTML = computerText;

                //Loop for each outcome

                if (item.id === options[random]){
                    result.innerHTML = "It's a tie"
                }
                else if (item.id === 'rock' && options[random] === 'paper'){
                    result.innerHTML = 'You lose!'
                    computerScore++;
                    computerScoreTxt.innerHTML = `Computer: ${computerScore}`
                }
                else if (item.id === 'rock' && options[random] === 'scissors'){
                    result.innerHTML = 'You won!'
                    userScore++;
                    userScoreTxt.innerHTML = `You: ${userScore}`
                }
                else if (item.id === 'paper' && options[random] === 'rock'){
                    result.innerHTML = 'You won!'
                    userScore++;
                    userScoreTxt.innerHTML = `You: ${userScore}`
                }
                else if (item.id === 'paper' && options[random] === 'scissors'){
                    result.innerHTML = 'You lose!'
                    computerScore++;
                    computerScoreTxt.innerHTML = `Computer: ${computerScore}`
                }
                else if (item.id === 'scissors' && options[random] === 'rock'){
                    result.innerHTML = 'You lose!'
                    computerScore++;
                    computerScoreTxt.innerHTML = `Computer: ${computerScore}`
                }
                else if (item.id === 'scissors' && options[random] === 'paper'){
                    result.innerHTML = 'You won!'
                    userScore++;
                    userScoreTxt.innerHTML = `You: ${userScore}`
                }

                //End-game

                if (userScore === 5) {
                    alert('You won a cookie!')

                    userScore = 0;
                    computerScore = 0;

                    userScoreTxt.innerHTML = `You: ${userScore}`
                    computerScoreTxt.innerHTML = `Computer: ${computerScore}`

                    userChoice.innerHTML = 'No choice made yet'
                    computerChoice.innerHTML = "Whenever you're ready"
                    result.innerHTML = "-"
                }
                else if (computerScore === 5){
                    alert('Booooooo')

                    userScore = 0;
                    computerScore = 0;

                    userScoreTxt.innerHTML = `You: ${userScore}`
                    computerScoreTxt.innerHTML = `Computer: ${computerScore}`

                    userChoice.innerHTML = 'No choice made yet'
                    computerChoice.innerHTML = "Whenever you're ready"
                    result.innerHTML = "-"
                }
            })
        })
    }
    selection()
}

game()
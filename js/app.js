let userScore = 0
let computerScore = 0

const userChoice = document.getElementById('user-choice')
let allUserChoices = document.querySelectorAll('.user-option')

let options = ['rock', 'paper', 'scissors']
const computerChoice = document.getElementById('computer-choice')

let random = Math.floor(Math.random() * options.length)
let computerText = `Computer chose ${options[random]}`
const computerImg = document.getElementById('computer-img')

const result = document.getElementById('round-result')
const userScoreTxt = document.getElementById('your-score')
const computerScoreTxt = document.getElementById('computer-score')

const modal = document.getElementById('result-modal')
const modalText = document.getElementById('message-modal')
const closeModal = document.getElementById('close-modal')

function selection() {
    allUserChoices.forEach(item => {
        item.addEventListener('click', () =>{
            userChoice.innerHTML = `You chose ${item.id}`
            computerSelection()
            
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
        })
    })
}

function computerSelection() {
    computerChoice.innerHTML = computerText;

    if(options[random] === 'rock') {
        computerImg.src = '/resources/hand-back-fist-regular.svg'
    }
    else if(options[random] === 'paper') {
        computerImg.src = '/resources/hand-regular.svg'
    }
    else if(options[random] === 'scissors') {
         computerImg.src = '/resources/hand-scissors-regular.svg'
    }
}

function openModal() {
    closeModal.addEventListener('click', () => modal.style.display = 'none')

    if(userScore === 5) {
        modal.style.display = flex;
        modalText.textContent = 'You won!'
        restart()
        
    }
    else if(userScore === 5) {
        modal.style.display = flex;
        modalText.textContent = 'You lose!'
        restart()
    }
}

function restart() {
    userScore = 0;
    computerScore = 0;

    userScoreTxt.innerHTML = `You: ${userScore}`
    computerScoreTxt.innerHTML = `Computer: ${computerScore}`

    userChoice.innerHTML = 'No choice made yet'
    computerChoice.innerHTML = "Whenever you're ready"
    result.innerHTML = "-"
}

selection()

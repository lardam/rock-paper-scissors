let userScore = 0;
let computerScore = 0;
let userSelection = ''
let computerSelection = ''

const userChoice = document.getElementById('user-choice')
let allUserChoices = document.querySelectorAll('.user-option')
const computerChoice = document.getElementById('computer-choice')
const computerIcon = document.getElementById('computer-icon')

const result = document.getElementById('round-result')
const userScoreTxt = document.getElementById('your-score')
const computerScoreTxt = document.getElementById('computer-score')

let options = ['rock', 'paper', 'scissors']

const modal = document.getElementById('result-modal')
const modalText = document.getElementById('message-modal')
const closeModal = document.getElementById('close-modal')

allUserChoices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        userSelection = choice.id
        userChoice.textContent = `You chose ${choice.id}`
        getComputerChoice()
        getResult()

        if(computerScore === 5){
            modalText.textContent = 'Booo!!! You lose'
            showModal()
        }else if(userScore === 5){
            modalText.textContent = 'Yay! You won!'
            showModal()
        } 
    })
})

function getComputerChoice(){
    let random = Math.floor(Math.random() * options.length)

    if(random === 0){
        computerSelection = 'rock'
        cleanClasses()
        computerIcon.classList.add('fa-hand-back-fist')
    } else if(random === 1){
        computerSelection = 'paper'
        cleanClasses()
        computerIcon.classList.add('fa-hand')
    } else if(random === 2){
        computerSelection = 'scissors'
        cleanClasses()
        computerIcon.classList.add('fa-hand-scissors')
    }

    function cleanClasses(){
        computerIcon.className = ''
        computerIcon.classList.add('fa-solid')
    }

    computerChoice.textContent = `Computer chose ${options[random]}`;
}

function getResult(){
    if(userSelection === 'rock' && computerSelection === 'paper' ||
    userSelection === 'paper' && computerSelection === 'scissors' ||
    userSelection === 'scissors' && computerSelection === 'rock'){
        computerWin()
    } else if(userSelection === 'rock' && computerSelection === 'scissors' ||
    userSelection === 'paper' && computerSelection === 'rock' ||
    userSelection === 'scissors' && computerSelection === 'paper'){
        userWin()
    } else if(userSelection === computerSelection){
        result.textContent = "It's a tie"
    }
}

function userWin(){
    userScore++
    refreshScore()
    result.textContent = 'You won!'
}

function computerWin(){
    computerScore++
    refreshScore()
    result.textContent = 'You lose!'
}

function refreshScore(){
    userScoreTxt.innerHTML = `You: ${userScore}`
    computerScoreTxt.innerHTML = `Computer: ${computerScore}`
}

function showModal(){
    modal.style.display = 'flex'
    computerScore = 0
    userScore = 0
    result.textContent = ''
    document.getElementById('overlay').style.display = 'block'
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
    })
}
const options = ['rock', 'paper', 'scissors'];
const rules = document.getElementById('rules');
const overlay = document.getElementById('overlay');
const closee = document.getElementsByClassName('close');
console.log(closee);
const game = document.getElementById('game');
const result = document.getElementById('result');
const user = game.querySelectorAll('.user-option');
console.log(user);
let userChoice = undefined;
let scoreVal = 0;
const reset = document.getElementById('reset');
const score = document.getElementById('score');
const text = document.getElementById('result-text');
const userSelect = document.getElementById('user-select');
const houseSelect = document.getElementById('house-select');
const resultContainer = document.querySelector('.result-text');
const houseImg = document.getElementById('house-img');

const house = () => {
    let index =  Math.floor(Math.random() * options.length);
    return options[index];
};

user.forEach(button => {
    button.addEventListener('click', () =>{
        userChoice = button.getAttribute('data-type');
        game.style.display = 'none';
        result.style.display = 'flex';
        checkWinner(userChoice);
    });

});

reset.addEventListener('click', () => {
    game.style.display = 'flex';
    result.style.display = 'none';
    houseImg.style.visibility = 'hidden';
    resultContainer.style.visibility = 'hidden';
    houseSelect.classList.remove('paper-circle');
    houseSelect.classList.remove('scissors-circle');
    houseSelect.classList.remove('rock-circle');
});

function checkWinner(userChoice){
    let houseChoice = house();
    if(userChoice === houseChoice){
        text.innerText = "It's draw"
    }else if(userChoice === 'rock' & houseChoice === "scissors" || 
            userChoice === 'paper' & houseChoice === "rock" ||
            userChoice === 'scissors' & houseChoice === "paper"){
        text.innerText = "You win";
        scoreVal++;
        
    }else{
        text.innerText = "you lose";
        if(scoreVal>0){
            scoreVal--;
        }
    }
    

    updateSelection(userSelect, userChoice);
    setTimeout(() => {
        updateSelection(houseSelect, houseChoice);
        houseImg.style.visibility = 'visible';
    }, 500);
    setTimeout(() => {
        score.innerText = scoreVal;
        resultContainer.style.visibility = 'visible';
    }, 1000);
}

function updateSelection(player, choice){
    //resetting the class
    player.classList.remove('paper-circle');
    player.classList.remove('scissors-circle');
    player.classList.remove('rock-circle');

    //adding the class 
    player.classList.add(`${choice}-circle`);

    //adding image
    player.querySelector('img').src = `./images/icon-${choice}.svg`;
}

rules.addEventListener('click', () => {
    console.log("click");
    overlay.style.display = 'flex';
});

Array.from(closee).forEach(button => {
    button.addEventListener('click', () => {
        console.log('click');
        overlay.style.display = 'none';
    });
});


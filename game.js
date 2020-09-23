const figuresHTMLElements = document.getElementById("container");

const figures = getFigures();

let choice;

function getFigures() {
    let figuresElements = [];

    for (let i = 0; i < figuresHTMLElements.childNodes.length; i++) {
        let nodes = figuresHTMLElements.childNodes[i];
        nodes.id && figuresElements.push(nodes.id);
    }
    return figuresElements;
}

function getComputerMove() {
    let random = Math.floor(Math.random() * figures.length);

    return figures[random];
}

function startGame() {
    for (let move = 0; move < figures.length; move++) {
        figuresHTMLElements.children[move].addEventListener('click', (event) => {
            choice = event.currentTarget.id;
            checkWinner(getComputerMove(), choice);
        });
    }
}

function setResultOnHTML(state) {
    let resultToHTML = document.getElementById('result');
    resultToHTML.innerHTML = state;
}

function checkWinner(computerMove, userMove) {
    if (
        (computerMove === 'rock' && userMove === 'scissors')       ||
        (computerMove === 'paper' && userMove === 'rock')       ||
        (computerMove === 'scissors' && userMove === 'paper')
    ) {
        setResultOnHTML(`💻 won <br /> 🧍 ${userMove} vs  ${computerMove} 💻`);
    }

    else if (
        (userMove === 'rock' && computerMove === 'scissors')       ||
        (userMove === 'paper' && computerMove === 'rock')       ||
        (userMove === 'scissors' && computerMove === 'paper')
    ) {
        setResultOnHTML(`🧍 won <br /> 🧍 ${userMove} vs ${computerMove} 💻`);
    }

    else  {
        setResultOnHTML(`It\'s a draw! <br />  🧍 ${userMove} vs  ${computerMove} 💻`);
    }
}

startGame();
const gameData = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

let gameRule=3;
let gameRule_tool=gameRule-1;

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;


const players = [
  {
    name: '이병건',
    symbol: 'black'
  },
  {
    name: '주호민',
    symbol: 'white'
  },
];

const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backdropElement = document.querySelector('#backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const formInput = document.querySelector('#playername');
const gameAreaElement = document.getElementById('active-game');
const gameBoardElement = document.querySelector('#game-board')
const activePlayerNameElement = document.getElementById('active-player-name');
const resultBoard = document.querySelector('#game-over');
const winnerResult = document.querySelector('#winner-name');
const gameBoardTotal = document.querySelector('#game-board-total');

// Button
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancleConfigBtnElement = document.getElementById('cancle-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');



// Event
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancleConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);


gameBoardElement.addEventListener('click', selectGameField);


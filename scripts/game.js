function resetGameStatus(){
  activePlayer=0;
  currentRound=1;
  gameIsOver = false;
  resultBoard.style.display='none';

  let gameBoardIndex = 0;
  for (let i=0; i< gameBoard; i++){
    for (let j=0; j< gameBoard; j++){
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardElement.children[gameBoardIndex].innerHTML='';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }

}


function startNewGame(){
  resetGameStatus();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = 'block';
};



function switchPlayer(){
  if(activePlayer ===0){
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;

}




function selectGameField(event){
  console.log(event.target);
  if (event.target.tagName != 'LI' || gameIsOver){
    return;
  }

  const selectedField = event.target;
  const selectedColumn = +selectedField.dataset.col-1;
  const selectedRow = +selectedField.dataset.row-1;

  if (gameData[selectedRow][selectedColumn]>0){
    return;
  }

  if(players[activePlayer].symbol=='black'){
    selectedField.innerHTML = `<i class="fa-solid fa-circle"></i>`;
  } else {
    selectedField.innerHTML = `<i class="fa-regular fa-circle"></i>`;
  }
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedColumn] = activePlayer + 1

  victoryLogic(event);

  currentRound=currentRound+1;

  switchPlayer();

}


function endGame(){
  resultBoard.style.display='block';
  winnerResult.textContent= players[activePlayer].name
  gameIsOver = true;
}

function victoryLogic(event){
  const selectedField = event.target;
  const selectedColumn = +selectedField.dataset.col-1;
  const selectedRow = +selectedField.dataset.row-1;
  let leftRightCount = 0;
  let upDownCount = 0;
  let oneSevenCount = 0;
  let elevenFiveCount = 0;

  // 오른쪽 가로
    for(let i=1; i<gameRule; i++){
      if(gameData[selectedRow][selectedColumn]!=gameData[selectedRow][selectedColumn+i]){
          break;       
      } else {
        leftRightCount=leftRightCount+1
      }
    }

  // 왼쪽 가로
    for(let i=1; i<gameRule; i++){
      if(gameData[selectedRow][selectedColumn]!=gameData[selectedRow][selectedColumn-i]){
          break;       
      } else {
        leftRightCount=leftRightCount+1
      }
    }
    

    // 위쪽
    for(let i=0; i<selectedRow; i++){
      if(gameData[selectedRow-i][selectedColumn]!=gameData[selectedRow-i-1][selectedColumn]){
          break;       
      } else {
        upDownCount=upDownCount+1
        if(upDownCount>=gameRule-1){
          console.log('upwin');
          endGame();
        }
      }
    }

    // // 아래쪽
    for(let i=0; i<gameBoard-selectedRow-1; i++){
      if(gameData[selectedRow+i][selectedColumn]!=gameData[selectedRow+i+1][selectedColumn]){
          break;       
      } else {
        upDownCount=upDownCount+1
        if(upDownCount>=gameRule-1){
          console.log('downwin');
          endGame();
        }
      }
    }
    
    // 대각선 1시
    for(let i=0; i<selectedRow; i++){
      if(gameData[selectedRow-i][selectedColumn+i]!=gameData[selectedRow-i-1][selectedColumn+i+1]){
          break;       
      } else {
        oneSevenCount=oneSevenCount+1
        if(oneSevenCount>=gameRule-1){
          console.log('1clockWin');
          endGame();
        }
      }
    }

    // 대각선7시
    for(let i=0; i<gameBoard-selectedRow-1; i++){
      if(gameData[selectedRow+i][selectedColumn-i]!=gameData[selectedRow+i+1][selectedColumn-i-1]){
          break;       
      } else {
        oneSevenCount=oneSevenCount+1
        if(oneSevenCount>=gameRule-1){
          console.log('7clockWin');
          endGame();
        }
      }
    }

    // 대각선 11시
    for(let i=0; i<selectedRow; i++){
      if(gameData[selectedRow-i][selectedColumn-i]!=gameData[selectedRow-i-1][selectedColumn-i-1]){
          break;       
      } else {
        elevenFiveCount=elevenFiveCount+1
        if(elevenFiveCount>=gameRule-1){
          console.log('11clockWin');
          endGame();
        }
      }
    }

    // 대각선 5시
    for(let i=0; i<gameBoard-selectedRow-1; i++){
      if(gameData[selectedRow+i][selectedColumn+i]!=gameData[selectedRow+i+1][selectedColumn+i+1]){
          break;       
      } else {
        elevenFiveCount=elevenFiveCount+1
        if(elevenFiveCount>=gameRule-1){
          console.log('5clockWin');
          endGame();
        }
      }
    }


    if(leftRightCount>=gameRule-1){
        endGame();
      }

    if(upDownCount>=gameRule-1){
        endGame();
      }

    if(oneSevenCount>=gameRule-1){
        endGame();
      }

    if(elevenFiveCount>=gameRule-1){
        endGame();
      }



    }

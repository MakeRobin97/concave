function resetGameStatus(){
  activePlayer=0;
  currentRound=1;
  gameIsOver = false;
  resultBoard.style.display='none';

  let gameBoardIndex = 0;
  for (let i=0; i< 5; i++){
    for (let j=0; j<5; j++){
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardElement.children[gameBoardIndex].innerHTML='';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }

}


function startNewGame(){
  // if (players[0].name ==='' || players[1].name ===''){
  //   alert('Please set custom player names for both players!');
  //   return;
  // }

  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;

  gameAreaElement.style.display = 'block';

  console.log(players);
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


function victoryLogic(event){
  // 흑돌 가로로직
  for (const oneRow of gameData) {
    const blackIndex = oneRow.indexOf(1);
    if(blackIndex!==-1){
   if(oneRow[blackIndex] ==1 &&oneRow[blackIndex+1] ==1 && oneRow[blackIndex+2] ==1){
    resultBoard.style.display='block';
    winnerResult.textContent= players[activePlayer].name
    endGame()
     }
   }
  }

  // 백돌 가로로직
  for (const oneRow of gameData) {
    const blackIndex = oneRow.indexOf(2);
    if(blackIndex!==-1){
   if(oneRow[blackIndex] ==2 &&oneRow[blackIndex+1] ==2 && oneRow[blackIndex+2] ==2){
    resultBoard.style.display='block';
    winnerResult.textContent= players[activePlayer].name
    endGame()   
  }
   }
  }

  let columnBox =[];
  //  흑돌 , 백돌 세로로직
   for (i=0; i<gameData.length; i++){

    const selectedField = event.target;
    const selectedColumn = +selectedField.dataset.col-1;
    columnBox.push(gameData[i][selectedColumn]);

    const blackIndex = columnBox.indexOf(1);
    if(blackIndex!==-1){
      if(columnBox[blackIndex] ==1 &&columnBox[blackIndex+1] ==1 && columnBox[blackIndex+2] ==1){
       resultBoard.style.display='block';
       winnerResult.textContent= players[activePlayer].name
       endGame()
        }
      }

    const whiteIndex = columnBox.indexOf(2);
    if(whiteIndex!==-1){
      if(columnBox[whiteIndex] ==2 &&columnBox[whiteIndex+1] ==2 && columnBox[whiteIndex+2] ==2){
        resultBoard.style.display='block';
        winnerResult.textContent= players[activePlayer].name
        endGame()
          }
    }

    }




  let cross1Box =[];
  let cross11Box =[];
      //  흑돌 , 백돌 대각선 로직
  const crossField = event.target;
  const crossColumn = +crossField.dataset.col-1;
  const crossRow = +crossField.dataset.row-1;

  // 대각선 1시

  try{
    cross1Box.push(gameData[crossRow-2][crossColumn+2])
  }
  catch {
    cross1Box.push(-1)
  }

  try{
    cross1Box.push(gameData[crossRow-1][crossColumn+1])
  }
  catch {
    cross1Box.push(-1)
  }

  try{
    cross1Box.push(gameData[crossRow][crossColumn])
  }
  catch {
    cross1Box.push(-1)
  }

  try{
    cross1Box.push(gameData[crossRow+1][crossColumn-1])
  }
  catch {
    cross1Box.push(-1)
  }

  try{
    cross1Box.push(gameData[crossRow+2][crossColumn-2])
  }
  catch {
    cross1Box.push(-1)
  }

  //대각선 11시

  try{
    cross11Box.push(gameData[crossRow-2][crossColumn-2])
  }
  catch {
    cross11Box.push(-1)
  }

  try{
    cross11Box.push(gameData[crossRow-1][crossColumn-1])
  }
  catch {
    cross11Box.push(-1)
  }

  try{
    cross11Box.push(gameData[crossRow][crossColumn])
  }
  catch {
    cross11Box.push(-1)
  }

  try{
    cross11Box.push(gameData[crossRow+1][crossColumn+1])
  }
  catch {
    cross11Box.push(-1)
  }

  try{
    cross11Box.push(gameData[crossRow+2][crossColumn+2])
  }
  catch {
    cross11Box.push(-1)
  }

  const blackCross1Index = cross1Box.indexOf(1);
  const blackCross11Index = cross11Box.indexOf(1);
  const whiteCross1Index = cross1Box.indexOf(2);
  const whiteCross11Index = cross11Box.indexOf(2);

    if(blackCross1Index!==-1){
      if(cross1Box[blackCross1Index] ==1 &&cross1Box[blackCross1Index+1] ==1 && cross1Box[blackCross1Index+2] ==1){
       resultBoard.style.display='block';
       winnerResult.textContent= players[activePlayer].name
       endGame()
        }
      }

    if(blackCross1Index!==-1){
      if(cross1Box[blackCross11Index] ==1 &&cross1Box[blackCross11Index+1] ==1 && cross1Box[blackCross11Index+2] ==1){
        resultBoard.style.display='block';
        winnerResult.textContent= players[activePlayer].name
        endGame()
          }
        }
    if(whiteCross1Index!==-1){
      if(cross1Box[whiteCross1Index] ==2 &&cross1Box[whiteCross1Index+1] ==2 && cross1Box[whiteCross1Index+2] ==2){
        resultBoard.style.display='block';
        winnerResult.textContent= players[activePlayer].name
        endGame()
            }
          }
    
    if(whiteCross11Index!==-1){
      if(cross11Box[whiteCross11Index] ==2 &&cross11Box[whiteCross11Index+1] ==2 && cross11Box[whiteCross11Index+2] ==2){
        resultBoard.style.display='block';
        winnerResult.textContent= players[activePlayer].name
        endGame()
              }
            }

    if(currentRound===25){
      resultBoard.style.display='block';
      winnerResult.textContent='없습니다';
      }

}

function endGame(){
  gameIsOver = true;
}
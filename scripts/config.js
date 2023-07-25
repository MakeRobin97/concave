function openPlayerConfig(event){
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display='block';
  backdropElement.style.display='block';

}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display='none';
  backdropElement.style.display='none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formInput.value ='';
}

function savePlayerConfig(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();
  if(!enteredPlayername){
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = '이름을 다시 입력해주세요';
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer +'-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;  
  players[editedPlayer-1].name = enteredPlayername;
  closePlayerConfig();
}
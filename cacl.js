// *********Player List********** //
function addPlayerName(element){
    const playerName = 
    element.parentNode.parentNode.children[1].children[0].innerText;

    const playerListElement = document.getElementById('player-list');
    const newPlayer = document.createElement("li");
    newPlayer.innerText = playerName;
    playerListElement.appendChild(newPlayer);

    const listSize = document.getElementById('player-list').childNodes;
    const numberofChilds = listSize.length;
    if(numberofChilds > 6){
        alert("Your Limit is Up. Cannot Select More");
    }
    onclick = element.disabled = "true";
}
// ********** Calculation Part ******* //
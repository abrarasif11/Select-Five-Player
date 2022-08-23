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
        alert("Your Limit is Over. Already Select 5 Players");
        newPlayer.style.listStyle ='none'
        newPlayer.innerText = ' ';
    }
    onclick = element.disabled = "true";
}
// ********** Calculation Per Player ******* //
document.getElementById('btn-calculate').addEventListener('click', function(){

    const listSize = document.getElementById('player-list').childNodes;
    const numberofChilds = listSize.length; 

    const perPlayerField = document.getElementById('salary-field');
    const perPlayerFieldString = perPlayerField.value;
    const previousPerPlayer = parseInt(perPlayerFieldString);

    const expencesTotal = document.getElementById('expences-total')

    const totalPerPlayer = (numberofChilds - 2) * previousPerPlayer;
    expencesTotal.innerText = totalPerPlayer;
});


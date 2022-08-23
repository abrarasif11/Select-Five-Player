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
        alert("Your Limit is Over. Already Select five Players");
        newPlayer.style.listStyle ='none';
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

    const expencesTotal = document.getElementById('expences-total');
   
    let totalPerPlayer ;
    if(numberofChilds <= 6){
       totalPerPlayer = (numberofChilds - 1) * previousPerPlayer;
    }
    else if(numberofChilds > 6){
       totalPerPlayer = 5 * previousPerPlayer;
    }
    
    expencesTotal.innerText = totalPerPlayer;
});

// *********** Total Cost ********** //
document.getElementById('calc-total-btn').addEventListener('click', function(){
     
    const managerField = document.getElementById('manager-field');
    const managerFieldString = managerField.value;
    const totalManegerFee = parseInt(managerFieldString);

    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const totalCoachFee = parseInt(coachFieldString);

    const perPlayerField = document.getElementById('salary-field');
    const perPlayerFieldString = perPlayerField.value;
    const previousPerPlayer = parseInt(perPlayerFieldString);

    const listSize = document.getElementById('player-list').childNodes;
    const numberofChilds = listSize.length; 

    let totalPerPlayer ;
    if(numberofChilds <= 6){
       totalPerPlayer = (numberofChilds - 1) * previousPerPlayer;
    }
    else if(numberofChilds > 6){
       totalPerPlayer = 5 * previousPerPlayer;
    }

    const totalFee = document.getElementById('total-fee');


    const TotalAmountFee = totalPerPlayer + totalManegerFee + totalCoachFee;
    totalFee.innerText = TotalAmountFee;
})
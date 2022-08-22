// ------ Player Expences ----- //

document.getElementById('btn-calculate').addEventListener('click', function(){
    let totalPlayers = 5;
    const totalExpences = totalPlayers * 1000;
    const expencesTotal = document.getElementById('expences-total');
    expencesTotal.innerText = totalExpences;
})
// --------- Total Fee ------- //

document.getElementById('calc-total-btn').addEventListener('click',function(){
    let managerFee = 2000;
    let coachFee = 4000; 
    const totalFee = 5000 + managerFee + coachFee;
    const totalElementFee = document.getElementById('total-fee');
    totalElementFee.innerText = totalFee;
})
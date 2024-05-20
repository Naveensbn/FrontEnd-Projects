function RollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const dresult = document.getElementById('dicevalue');
    const dimages = document.getElementById('diceimage');
    const values = [];
    const images =[];
    for(i=0; i < numofDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="/diceImages/${value}.jpg" alt="${value}:dice" width=100,height=50>`);

    }
    // dresult.textContent = `dice: ${values.join(', ')}`;

    dresult.textContent = `dice: ${values}`;
    dimages.innerHTML = images.join(' ');
    // dimages.innerHTML = images;

}


const choices =['rock','paper','scissors'];
const playerdisp = document.getElementById("playerdisplay");
const computerdisp = document.getElementById("computerdisplay");
const resultdisp  = document.getElementById('resultdisplay');
const playerscoredisplay = document.getElementById('playerscoredisplay');
const computerscoredisplay = document.getElementById('computerscoredisplay');

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice){
    const computerchoice =choices[Math.floor(Math.random()*3)]
    // console.log(computerchoice)
    console.log(playerchoice);

    let result = "";
    // computerdisp.textContent = computerchoice
    if(playerchoice === computerchoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
               result = (computerchoice === "scissors")?"YOU WIN!":"YOU LOSE!";
               break;
            case "paper":
                result = (computerchoice === "rock")? "YOU WIN!":"YOU LOSE!";
                break;
            case "scissors":
                result = (computerchoice === "paper")?"YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    playerdisp.textContent = `player : ${playerchoice}`;
    computerdisp.textContent = `computer : ${computerchoice}`;
    resultdisp.textContent = result;

    resultdisp.classList.remove('greenText','redtext')

    switch(result){
        case "YOU WIN!":
            resultdisp.classList.add('greenText');
            playerscore ++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSE!":
            resultdisp.classList.add('redtext');
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
}

    // resultdisp.classList.remove('greenText','redtext')
    

    // if(result === "YOU WIN!"){
    //     // resultdisp.classList.add("greenText");
    //     resultdisp.classList.add('greenText');


    // }
    // else if(result==="YOU LOSE!"){
    //     resultdisp.classList.add('redtext');
    // }
    // //  else{
    // //      resultdisp.style.color = 'yellow';

    // //  }   

    
}
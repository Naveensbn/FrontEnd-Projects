const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;
// ---------------example-----------------------
const datenow = Date.now() //current date in milliseconds
console.log( Date.now());
//  let cd = new Date(1712921902655); millisec in epoch(computer things time begin)
 let cd = new Date(Date.now());

 console.log(cd);
 console.log(cd.getHours());

// console.log(`${Date.now()/(1000*60*60)}`);
console.log(`${1712924588870/(1000*60*60)}`);

//----------------------------------------------
function start(){
    if(!isRunning){
        starttime = Date.now()-elapsedtime;
        timer = setInterval(update,10) // call update func every 10 millisec 
        isRunning = true;
        // console.log(timer);
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
    }

}
function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`

}
function update(){
    const currenttime = Date.now();
    // starttime 8.55am and now is 9.00am 
    //so pause time is srarttime- now (9.00 - 8.55) = 5mins
    elapsedtime = 1712929476561 - 1712929476554
    elapsedtime = currenttime - starttime;
    // elapsedtime = 90000; //(in millisec)
    let hours = Math.floor(elapsedtime/(1000*60*60))
    let minutes = Math.floor(elapsedtime/(1000*60)%60) //%60 means once we hit 60 it will reset back to zero
    let seconds = Math.floor(elapsedtime/1000 % 60)
    let milliseconds = Math.floor(elapsedtime % (1000 /10)) // / div by 10 only want first two digits

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}
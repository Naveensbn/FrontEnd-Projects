let mycheckbox = document.getElementById("mycheckbox")
let myrecharge = document.getElementById("myrecharge")

let bankblance = document.getElementById("bankblance")
let Rechargeresult = document.getElementById("Rechargeresult")
function mychatbox(){
let RechargeAmount = document.getElementById("RechargeAmount").value
// let balance = 1000;
const max=10000
const min = 1000
let balance = Math.floor(Math.random()*(max-min+1))+min;

    RechargeAmount =Number(RechargeAmount);
    console.log(typeof RechargeAmount,RechargeAmount)
    if(mycheckbox.checked){
        bankblance.textContent = `your bank balance is ${balance}rs`   
         
     }
     
     else{
        bankblance.textContent = `you did not check bank balance`   

     }

     
         if(myrecharge.checked){
            Rechargeresult.textContent =`your mobile is recharged ${RechargeAmount}rs
                                        and current bank balance is ${balance-RechargeAmount}rs`
        }
        else {
            Rechargeresult.textContent =`please select recharge the amount`
        }
    

}

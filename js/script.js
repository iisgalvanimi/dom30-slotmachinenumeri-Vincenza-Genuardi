const digit0 = document.getElementById("d0");
const digit1 = document.getElementById("d1");
const inizioBottone = document.getElementById("btnStart")
const messaggio = document.getElementById("message");

let num_rand = Math.random() * 3;
let num_rand2 = Math.random() * 3;
let myInterval;
let dig0 = 0;
let dig1 = 0;
let com = 0;

function inizioTimer(){
    //ho aggiunto che quando si riclicca start i numeri tornano a 0 prima
    digit0.innerText= 0;
    digit1.innerText = 0;

    myInterval =  setInterval(timerFunc, 1000);
  
    if (typeof(myInterval) != "undefined") { return ; }
   
    
  }
  function fineTimer(){
    clearInterval(myInterval)
 
   if (typeof(myInterval) == "undefined") { return ; }   
   
 }


function timerFunc(){
    com++

    if(com <= 3){
    num_rand = Math.random() * 3;
    num_rand = Math.trunc(num_rand)
    dig0 = num_rand;
    num_rand2 = Math.random() * 3;
    num_rand2 = Math.trunc(num_rand2)
    dig1 = num_rand2;
    digit1.innerText= dig1;
    digit0.innerText = dig0;
    messaggio.innerText = com;
    }

    if (com == 3 && dig0 == dig1){
        messaggio.innerText="hai vinto!"
        com = 0;
        fineTimer();
        

    }else if (com == 3 && dig0 != dig1){
        messaggio.innerText="hai perso!"
        com = 0;
        fineTimer();
        
    }
  

}


inizioBottone.addEventListener( 'click' , inizioTimer)
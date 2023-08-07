let player1Score = 0;
let player2Score = 0;
let player1ToPlay = true

const player1ScoreUpdate = document.getElementById("score1");
const player2ScoreUpdate = document.getElementById("score2");

const player1Rollbtn = document.getElementById("roll1");
const player2Rollbtn = document.getElementById("roll2");

const playScore =document.getElementById("dice");

const message = document.getElementById("whoPlay");
const resetButton = document.getElementById("reset");

player1Rollbtn.addEventListener("click",rollDice);
player2Rollbtn.addEventListener("click",rollDice);

resetButton.addEventListener("click",startAgain);

function restart(){
    player1Rollbtn.disabled = true
    player2Rollbtn.disabled = true
 }


function rollDice(){
        let randomNumber = Math.floor((Math.random()*6)+1);
        if(player1ToPlay){
            playScore.setAttribute("style",`background-image: url(dice${randomNumber}.png);`)
            
            player1Score +=randomNumber
            player1ScoreUpdate.innerHTML = player1Score
            player1Rollbtn.disabled = true
            message.innerText = "Player-2 TO Play"
            player2Rollbtn.disabled = false
        }else{
            playScore.setAttribute("style",`background-image: url(dice${randomNumber}.png);`)
           
            player2Score +=randomNumber
            player2ScoreUpdate.innerHTML = player2Score
            player2Rollbtn.disabled = true
            message.innerText = "Player-1 TO Play"
            player1Rollbtn.disabled = false

        }
        

         if(player1Score>=30){
            message.innerText ="Player-1 Wins"
            restart()

         }else if(player2Score>=30){
            message.innerText ="Player-2 Wins"
            restart()
         
    }   player1ToPlay=!player1ToPlay  
}
        
    function startAgain(){
          player1Score = 0;
          player2Score = 0;
          player1ScoreUpdate.innerHTML = player1Score;
          player2ScoreUpdate.innerHTML = player2Score;
          player1ToPlay = true
          message.innerText = "Player-1 TO Play"
          player1Rollbtn.disabled = false
          player2Rollbtn.disabled = true
        playScore.setAttribute("style","background-image: none;")

    }








// let randomPlayer = Math.floor((Math.random()*2)+1);
// document.getElementById("whoPlay").innerHTML= `Player-${randomPlayer} to play`
// playGame();
// // let start = document.getElementById("body")
// // start.addEventListener("load",playGame);

// function playGame(){
  
//     if(randomPlayer===2){
//      document.getElementById("roll1").disabled=true
               
//     }else{
//       document.getElementById("roll2").disabled=true
      
//     }

// }

// let eventButton = document.getElementById(`roll${randomPlayer}`)
// eventButton.addEventListener("click",rollDice);

// function rollDice(){
//     let randomNumber = Math.floor((Math.random()*6)+1);
       
//     if(randomPlayer==1){
//         document.getElementById("score1").innerText= randomNumber
//         document.getElementById("roll1").disabled=true
//         document.getElementById("roll2").disabled=false
//     }else{
//         document.getElementById("score2").innerText= randomNumber
//         document.getElementById("roll2").disabled=true
//         document.getElementById("roll1").disabled=false
//     }
// }
    
let chosenByMan="";
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");
const userScore=document.getElementById("user-score");
const computerScore=document.getElementById("computer-score");
const result=document.getElementById("result");
const play=document.getElementById("play-button");
rock.addEventListener("click",()=>{
    chosenByMan="rock";
});
paper.addEventListener("click",()=>{
    chosenByMan="paper";
});
scissors.addEventListener("click",()=>{
    chosenByMan="scissors";
});

                
            play.addEventListener("click",()=>{
                let number = Math.floor((Math.random()*3)+1);
                let chosenByPc=0;
                    if (number ===1){
                        chosenByPc="rock";
                    }else if (number===2){
                        chosenByPc="paper";
                    }else{
                        chosenByPc="scissors";
                    }
            if (chosenByMan===chosenByPc){
                result.textContent="It is a draw !!";
                userScore.textContent++
                computerScore.textContent++
                result.style.backgroundColor="yellow";
            }else if ((chosenByMan==="rock" && chosenByPc==="scissors")||(chosenByMan==="paper"&&chosenByPc==="rock")||(chosenByMan==="scissors"&&chosenByPc==="paper")){
                result.textContent="You Won !!";
                userScore.textContent++
                result.style.backgroundColor="green";
                
            }else{
                result.textContent="You lose !!";
                computerScore.textContent++
                result.style.backgroundColor="red";
            }
        })


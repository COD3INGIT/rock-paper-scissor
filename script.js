function computerPlay()
{
    let  randomSelection=Math.floor(Math.random()* 3);
    switch(randomSelection)
    {
        case 0:return "rock";
        break;
        case 1: return "paper";
        break;
        case 3: return "scissor";
        break;
    }
}
function playRound(playerSelection,computerSelection)
{
if (playerSelection== computerSelection)
 return("play tied");
else if((playerSelection=="rock" && computerSelection=="scissor")||(playerSelection=="paper" && computerSelection=="rock")||(playerSelection=="Scissor" && computerSelection=="paper"))
{
    return("Player wins");

}
  else{
      return("you lose computer wins!!");
  }

}
function game(){
    for(i=0;i<5;i++)
    {    
    let playerSelection=prompt("Enter your turn");
    playerSelection.toLowerCase();
    let computerSlelection=computerPlay();
    console.log(playRound(playerSelection,computerSlelection));
    }
  
}
game();

    

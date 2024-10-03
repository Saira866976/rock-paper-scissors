let All_item = document.querySelectorAll("img");
let result = document.querySelector("input");
let score = document.querySelectorAll("button");
// result.value="Hello";
// console.log(score);

let computer_score=0;
let user_score=0;

function Winner(){
  // console.log(computer);
  if (computer == '0' && user == "1") {
    console.log("computer Win!");
    result.value="You Lose!";
    result.style.backgroundColor="black";
    computer_score+=1;
    score[0].innerHTML=computer_score;
    
  }
  else if(computer=='3'&&user=='0'){
    console.log("Computer win!");
    result.value="You Lose!";
    result.style.backgroundColor="black";
    computer_score+=1;
    score[0].innerHTML=computer_score;

  }
  else if(computer=='1' && user=='2'){
    console.log("Computer win!");
    result.value="You Lose!";
    result.style.backgroundColor="black";
    computer_score+=1;
    score[0].innerHTML=computer_score;
  }
  else if(computer==user){
    console.log("Game is tie!")
    result.value="Game is Tie!";
    result.style.backgroundColor="orange";
  }
  else{
    console.log("You win!")
    result.value="You Win!!";
    result.style.backgroundColor="green";
    user_score+=1;
    score[1].innerHTML=user_score;

  }
}

let computer="";
function computer_choice() {
  computer = Math.floor(Math.random() * 3);
  // console.log(computer);
    if (computer == '0') {
      console.log("Computer Choose Paper");
    }
    else if (computer == '1') {
      console.log("Computer Choose Rock");
    }
    else if (computer == '2') {
      console.log("Computer choose scisssor");
    }
    Winner();
}

function user_choice(){
  All_item[0].addEventListener("click", (e) => {
    console.log("You choose paper");
    user = 0;
    computer_choice();
  })

  All_item[1].addEventListener("click", (e) => {
    console.log("You choose rock")
    user = 1;
    computer_choice();
  })

  All_item[2].addEventListener("click", (e) => {
    console.log("You choose scissors")
    user = 2;
    computer_choice();
  })

}
 user_choice();

// for(let i=0;i<3;i++){
//   user_choice();
//    computer_choice();
// }


 







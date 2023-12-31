const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const sci=document.querySelector('#scissors')
const p=document.querySelector('.p')
const c=document.querySelector('.c')
const user=document.querySelector('#user')
const com=document.querySelector('#comper')
const res=document.querySelector('#result')
let choi
let myScore=0
let compScore=0
rock.addEventListener('click', ()=>{
  choi='Rock'
  p.textContent="Rock"
  game()
  
})

paper.addEventListener('click', ()=>{
  choi='Paper'
  p.textContent="Paper"
  game()
  
})
sci.addEventListener('click', ()=>{
  choi='Scissors'
  p.textContent="Scissors"
  game()
  
})
function compC(){
  let integ=Math.floor(Math.random() *3)
  if (integ===0){
    c.textContent="Rock"
    return 'Rock'
  }
  else if(integ===1){
    c.textContent="Paper"
    return 'Paper'
  }
  else{
    c.textContent="Scissors"
    return 'Scissors'
  }
}
function play(choi,comp){
  if ((choi === "Rock" && comp === "Scissors") || (choi === "Paper" && comp === "Rock") ||  (choi === "Scissors" && comp === "Paper")) {
    return "You win!";
    } else if (choi === comp) {
    return "It's a tie!";
    } else {
    return "You lose!";
    }
}
function game(){
  let comp=compC()
  if(play(choi,comp)==="You win!"){
    myScore++
  }
  else if (play(choi,comp)==="You lose!"){
    compScore++          
  }
  user.textContent=`${myScore}`
  com.textContent=`${compScore}`
  res.textContent=`${play(choi,comp)}`;
}
const ag=document.querySelector('#ag')
ag.addEventListener('click', ()=>{
  myScore=0
  compScore=0
  p.textContent='Player'
  c.textContent='Comp'
  res.textContent='Make a choice!'
  user.textContent='0'
  com.textContent='0'
  h1.textContent='Rock, scissors, paper'
})
const h1=document.querySelector('#h1')

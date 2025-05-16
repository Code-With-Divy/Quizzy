let right;
let firstNum,secondNum,sum;
document.querySelector('.newQue').disabled = true;
function randomNum(){
  return Math.floor(((Math.random()*9)*Math.random()*29)+1)
}
function main(){
 firstNum = randomNum();
 secondNum = randomNum();
 sum = (firstNum + secondNum);
 right = false
 if(!right){
   document.querySelector('.newQue').disabled = true;
 }
 showQuiz()
}
main()
function showQuiz(operation){
document.getElementById('quiz').innerText= `${firstNum} + ${secondNum} ?`;
}
function checkAnswer(){
let input = document.getElementById('answer').value;
let answer = parseInt(input);
 if ((input.trim().length) < 1 || isNaN(answer)){
  alert('Please Enter your answer or enter a valid number.')
}else if(answer === sum){
  document.getElementById('result').innerHTML = '<p class="right">Your Answer Is Right! </p>';
  right = true;
  if (right){
  document.querySelector('.newQue').disabled = false;
}
}else if (answer !== sum){
  document.getElementById('result').innerHTML = `<p class="wrong">Your Answer Is Wrong! </p> <p>The Right answer is ${sum}</p>`
  right = false;
  if (!right){
  document.querySelector('.newQue').disabled = true;
}
}
}
function NewQue() {
 document.getElementById('answer').value = "";
  right = false;
  main();
}
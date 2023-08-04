let currentCashAmount = 0;
let counter = 0;
let timesRun = 0;
const phrase = "ACTIONS SPEAK LOUDER THAN WORDS";
let allLetters = 0;





function spin(){
    counter = 0;
    timesRun = 0;
    let interval = setInterval(function(){
        timesRun ++;
        if(timesRun == 8){
            clearInterval(interval);
        }
        changeWheel()
    }, 500); 


    setTimeout(cashAmount,5000);
    playWheelSound() 
}

const wheelImage = document.getElementById("wheelImage");

function changeWheel(){
    
    if (counter == 0){
        wheelImage.innerHTML='<img src="./images/1.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 1){
        wheelImage.innerHTML='<img src="./images/2.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 2){
        wheelImage.innerHTML='<img src="./images/3.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 3){
        wheelImage.innerHTML='<img src="./images/4.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 4){
        wheelImage.innerHTML='<img src="./images/5.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 5){
        wheelImage.innerHTML='<img src="./images/6.png"alt="prize wheel image"/>'
        counter++;
    }
    else if(counter == 6){
        wheelImage.innerHTML='<img src="./images/7.png"alt="prize wheel image"/>'
        counter++;
    }

    else if(counter == 7){
        wheelImage.innerHTML='<img src="./images/8.png"alt="prize wheel image"/>'
        counter++;
    }
    else{
        wheelImage.innerHTML='<img src="./images/1.png"alt="prize wheel image"/>'
    }
}



function cashAmount(){
    let prizeMoney = document.getElementById("cashLetter")
    let number = Math.floor(Math.random()*6)
    if (number ==0){
        prizeMoney.textContent = '£400'
        currentCashAmount = 400;
    }
    else if(number ==1){
        prizeMoney.textContent = '£750'
        currentCashAmount = 750;
    }
    else if(number ==2){
        prizeMoney.textContent = '£5000'
        currentCashAmount = 5000;
    }
    else if(number ==3){
        prizeMoney.textContent = '£150'
        currentCashAmount = 150;
    }
    else if(number ==4){
        prizeMoney.textContent = '£1250'
        currentCashAmount = 1250;
    }
    else if(number ==5){
        prizeMoney.textContent = '£350'
        currentCashAmount = 350;
    }
    else{
        prizeMoney.textContent = '£200'
        currentCashAmount = 400;
    }
    flashOn();
}


function flashOn(){
    let changeColor = document.getElementById("cashLetter").classList;
    changeColor.add("flashOn");
    setTimeout(flashOff,300);
}
      
function flashOff(){
    let changeColor = document.getElementById("cashLetter").classList;
    changeColor.remove("flashOn");
}

let totalCash = 0;

//Sounds

const correctSound = document.getElementById("correct");
function playCorrect() {
    correctSound.play();
  }

const incorrectSound = document.getElementById("incorrect");
function playIncorrect() {
      incorrectSound.play();
}

const bankruptSound = document.getElementById("bankruptSound");
function playbankruptSound() {
      bankruptSound.play();
}

const wheelSound = document.getElementById("wheelSound");
function playWheelSound() {
      wheelSound.play();
}

const winnerSound = document.getElementById("winnerSound");
function playWinnerSound() {
      winnerSound.play();
}

const startingSound = document.getElementById("startingSound");
function playStartingSound() {
      startingSound.play();
}
const rulesSound = document.getElementById("rulesSound");
function playRulesSound() {
      rulesSound.play();
}
//guessing functions

function guess(letter){
    if(letter == 'A'){
        this.disabled = true;
        document.getElementById("A").textContent="A";
        document.getElementById("A2").textContent = "A";
        document.getElementById("A3").textContent = "A";
        document.getElementById("butA").style.backgroundColor = "#7ed957";
        document.getElementById("butA").style.color = "#000";
        totalCash = totalCash - 150;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter == 'B'){
        this.disabled = true;
        document.getElementById("butB").style.backgroundColor = "#7ed957";
        document.getElementById("butB").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='C'){
        this.disabled = true;
        document.getElementById("C").textContent="C";
        document.getElementById("butC").style.backgroundColor = "#7ed957";
        document.getElementById("butC").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='D'){
        this.disabled = true;
        document.getElementById("D").textContent="D";
        document.getElementById("D2").textContent="D";
        document.getElementById("butD").style.backgroundColor = "#7ed957";
        document.getElementById("butD").style.color = "#000";
        totalCash = totalCash + (currentCashAmount *2);
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='E'){
        this.disabled = true;
        document.getElementById("E").textContent="E";
        document.getElementById("E2").textContent="E";
        document.getElementById("butE").style.backgroundColor = "#7ed957";
        document.getElementById("butE").style.color = "#000";
        totalCash = totalCash - 100;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter == 'F'){
        this.disabled = true;
        document.getElementById("butF").style.backgroundColor = "#7ed957";
        document.getElementById("butF").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter == 'G'){
        this.disabled = true;
        document.getElementById("butG").style.backgroundColor = "#7ed957";
        document.getElementById("butG").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='H'){
        this.disabled = true;
        document.getElementById("H").textContent="H";
        document.getElementById("butH").style.backgroundColor = "#7ed957";
        document.getElementById("butH").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='I'){
        this.disabled = true;
        document.getElementById("I").textContent="I";
        document.getElementById("butI").style.backgroundColor = "#7ed957";
        document.getElementById("butI").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='J'){
        this.disabled = true;
        document.getElementById("butJ").style.backgroundColor = "#7ed957";
        document.getElementById("butJ").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='K'){
        this.disabled = true;
        document.getElementById("K").textContent="K";
        document.getElementById("butK").style.backgroundColor = "#7ed957";
        document.getElementById("butK").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='L'){
        this.disabled = true;
        document.getElementById("L").textContent="L";
        document.getElementById("butL").style.backgroundColor = "#7ed957";
        document.getElementById("butL").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='M'){
        this.disabled = true;
        document.getElementById("butM").style.backgroundColor = "#7ed957";
        document.getElementById("butM").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='N'){
        this.disabled = true;
        document.getElementById("N").textContent="N";
        document.getElementById("N2").textContent="N";
        document.getElementById("butN").style.backgroundColor = "#7ed957";
        document.getElementById("butN").style.color = "#000";
        totalCash = totalCash + (currentCashAmount * 2);
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='O'){
        this.disabled = true;
        document.getElementById("O").textContent="O";
        document.getElementById("O2").textContent="O";
        document.getElementById("O3").textContent="O";
        document.getElementById("butO").style.backgroundColor = "#7ed957";
        document.getElementById("butO").style.color = "#000";
        totalCash = totalCash -150;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='P'){
        this.disabled = true;
        document.getElementById("P").textContent="P";
        document.getElementById("butP").style.backgroundColor = "#7ed957";
        document.getElementById("butP").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='Q'){
        this.disabled = true;
        document.getElementById("butQ").style.backgroundColor = "#7ed957";
        document.getElementById("butQ").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='R'){
        this.disabled = true;
        document.getElementById("R").textContent="R";
        document.getElementById("R2").textContent="R";
        document.getElementById("butR").style.backgroundColor = "#7ed957";
        document.getElementById("butR").style.color = "#000";
        totalCash = totalCash + (currentCashAmount *2);
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='S'){
        this.disabled = true;
        document.getElementById("S").textContent="S";
        document.getElementById("S2").textContent="S";
        document.getElementById("S3").textContent="S";
        document.getElementById("butS").style.backgroundColor = "#7ed957";
        document.getElementById("butS").style.color = "#000";
        totalCash = totalCash + (currentCashAmount *3);
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='T'){
        this.disabled = true;
        document.getElementById("T").textContent="T";
        document.getElementById("T2").textContent="T";
        document.getElementById("butT").style.backgroundColor = "#7ed957";
        document.getElementById("butT").style.color = "#000";
        totalCash = totalCash + (currentCashAmount *2);
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='U'){
        this.disabled = true;
        document.getElementById("U").textContent="U";
        document.getElementById("butU").style.backgroundColor = "#7ed957";
        document.getElementById("butU").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='V'){
        this.disabled = true;
        document.getElementById("butV").style.backgroundColor = "#7ed957";
        document.getElementById("butV").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='W'){
        this.disabled = true;
        document.getElementById("W").textContent="W";
        document.getElementById("butW").style.backgroundColor = "#7ed957";
        document.getElementById("butW").style.color = "#000";
        totalCash = totalCash + currentCashAmount;
        document.getElementById("totalCash").textContent = totalCash;
        allLetters++;
        playCorrect();
    }
    else if(letter =='X'){
        this.disabled = true;
        document.getElementById("butX").style.backgroundColor = "#7ed957";
        document.getElementById("butX").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else if(letter =='Y'){
        this.disabled = true;
        document.getElementById("butY").style.backgroundColor = "#7ed957";
        document.getElementById("butY").style.color = "#000";
        wrongAnswerOn();
        playIncorrect()
    }
    else{
        this.disabled = true;
        document.getElementById("butZ").style.backgroundColor = "#7ed957";
        document.getElementById("butZ").style.color = "#000";
        wrongAnswerOn(); 
        playIncorrect()
    }
    if (allLetters == 16){
        setTimeout(finishGame,3000);
    }
    
}

function wrongAnswerOn(){
    let changeColor = document.getElementById("flashRed").classList;
    console.log(changeColor);
    changeColor.add("red");
    setTimeout(wrongAnswerOff,300);
}
      
function wrongAnswerOff(){
    let changeColor = document.getElementById("flashRed").classList;
    changeColor.remove("red");
}

//Finishing game options
function finalGuess(){
    localStorage.setItem("cash",totalCash);
    let userGuess = prompt("Please enter your guess");
    let word = userGuess.toUpperCase();
    
    if (word == phrase){
        let finalCash = localStorage.getItem("cash") 
        document.getElementById("main-game-area").style.display = 'none'    
        document.getElementById("finalAnswer2").style.display = 'block'
        document.getElementById("finalTotal2").textContent = finalCash; 
        playWinnerSound()      
    }
    else{
        document.getElementById("main-game-area").style.display = 'none'    
        document.getElementById("bankrupt").style.display = 'block'
        playbankruptSound()
    }
}

function finishGame(){
    localStorage.setItem("cash",totalCash);
    document.getElementById("main-game-area").style.display = 'none' 
    let finalCash = localStorage.getItem("cash")    
    document.getElementById("finalAnswer1").style.display = 'block'
    document.getElementById("finalTotal1").textContent = finalCash;  
    playWinnerSound()     
    }
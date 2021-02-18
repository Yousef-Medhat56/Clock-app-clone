//Selectors

//Selecting time elements classes
const secondDiv= document.querySelectorAll(".second")
const minuteDiv= document.querySelectorAll(".minute")
const hourDiv= document.querySelectorAll(".hour")

//Selecting centered time elements in time-block DIV
const centerSec = document.getElementById("center-second")
const centerMin = document.getElementById("center-minute")
const centerHour = document.getElementById("center-hour")

//Selecting Start button
const startBtn = document.getElementById("start-btn")

//Selecting time elements in timer countdown
const countdownSec = document.getElementById("countdown-second")
const countdownMin = document.getElementById("countdown-minute")
const countdownHour = document.getElementById("countdown-hour")
//SetInterval
let countDown
//Functions

/*Functions - Changing the time element values
timerDiv stands for which time div is changed:seconds, minutes or hours
maxValue stands for the maximun or the minimum value for the timerDiv elements
difference makes the time elements values increase or decrease 
*/

function changeTimeVal(timerDiv,maxValue,difference){ //Called After clicking the arrow buttons
    for (var i = 0; i < timerDiv.length; i++) {
        timerDiv[i].textContent = parseInt(timerDiv[i].textContent)-difference //increasing or decreasing the time element value
        maxTimeVal(timerDiv,i,maxValue)
        writingZero(timerDiv,i)
    }
    styleStartBtn()
}

/*Functions - Controling showing the time elements values between max and minimum values*/
function maxTimeVal(timerDiv,timeElementOrder,maxValue){
    //If the time element value is less than 0
    if(parseInt(timerDiv[timeElementOrder].textContent)<0){
        timerDiv[timeElementOrder].textContent = maxValue //Returning time element value to the maximum value
    }

    //If the time element value is bigger than the maximum value
    else if (parseInt(timerDiv[timeElementOrder].textContent)>maxValue){
        timerDiv[timeElementOrder].textContent = 0 //Returning time element value to 0
    }
}

//Functions - writing zero before the time element if its value is less than 10
function writingZero(timerDiv,timeElementOrder){
    if((0<=parseInt(timerDiv[timeElementOrder].textContent)) &&(parseInt(timerDiv[timeElementOrder].textContent)<10)){
        timerDiv[timeElementOrder].textContent = `0${parseInt(timerDiv[timeElementOrder].textContent)}`
    }
}

/*Functions | Styling the Start button according to the time elements values,
if (time elements values == 0) {
    start button opacity = 0.5
    remove event listener from the Start button
}*/
function styleStartBtn(){
    if((centerHour.textContent ==0)&&
    (centerMin.textContent ==0)&&
    (centerSec.textContent ==0)){
        startBtn.style.opacity = 0.5;
        startBtn.style.cursor = "default";
        startBtn.removeEventListener("click",clickStart)
    }

    else{
        startBtn.style.opacity = 1;
        startBtn.style.cursor = "pointer";
        startBtn.addEventListener("click",clickStart)
}
}
//Functions | Onclick buttons
//Onclick buttons | Start button functions

// Start button functions | removing Start button and appearing Reset and Stop buttons
function showingResStopBtn(){
    document.getElementById("start-btn-div").style.display = "none" //Hiding start button
    document.getElementById("after-start-btn-div").style.display = "flex" //Showing Reset and Stop buttons 
}

// Start button functions | removing timer block div and timer countdown div
function showingCountDown(){
    document.getElementById("timer-block").style.display = "none" //Hiding timer block div
    document.getElementById("timer-countdown").style.display = "flex" //Showing the countdown
}

// Start button functions | show the chosen time from the timer block inside the countdown
function writeChosenTime(){  
    countdownHour.textContent = centerHour.textContent
    countdownMin.textContent = centerMin.textContent
    countdownSec.textContent = centerSec.textContent
}

// Start button functions | Adding setInterval function that starts the countdown
function startCountdown(){
    countDown = setInterval(function(){
        countdownSec.textContent-- //decreasing the seconds value by 1
        timeMinVal(countdownSec,countdownMin)
        timeMinVal(countdownMin,countdownHour)

        //adding zeros before time elements if their value are less than 10
        writingZero(document.querySelectorAll("#countdown-elements span"),2)
        writingZero(document.querySelectorAll("#countdown-elements span"),1)
        writingZero(document.querySelectorAll("#countdown-elements span"),0)
        
        finishCountdown()
    },1000)
}

//Countdown functions | Functions in the countdown setInterval function  

/*Countdown functions | Check if (seconds or minutes values are under 0){
    seconds or minutes values = 59
    minutes or hours values are decreased by 1
}
*/ 
function timeMinVal(timElmntUndZero,decreasedTimElmnt){ 
    if((timElmntUndZero.textContent<0)){
        timElmntUndZero.textContent = "59"
        decreasedTimElmnt.textContent--
    }
}

//Countdown functions | //check if the countdown is finished
function finishCountdown(){ 
    if((countdownSec.textContent ==0)&&
    (countdownMin.textContent ==0)&&
    (countdownHour.textContent ==0)){
        clearInterval(countDown)
    }
}



//BUTTONS

//Buttons | start button


function clickStart(){
    writeChosenTime()
    showingResStopBtn()
    showingCountDown()
    startCountdown()
}

//Buttons | Reset button
function clickReset(){
    window.location.reload() //Reloading the page
}

//Buttons | Stop & Resume button
function clickStopResume(){
    //Hiding Stop button and Showing Resume
    if (document.getElementById("stop-btn") != null){
        document.getElementById("stop-btn").textContent = "Resume" 
        document.getElementById("stop-btn").setAttribute("id","resume-btn") //Adding Id to the Resume button to the ID add styles on it
    }

    //Hiding Resume button and Showing Stop
    else if (document.getElementById("stop-btn") == null){
        document.getElementById("resume-btn").textContent = "Stop"
        document.getElementById("resume-btn").setAttribute("id","stop-btn") //Adding Id to the Stop button to the ID add styles on it
    }

}


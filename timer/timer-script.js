//Selectors

//Selecting time elements classes
const secondDiv= document.querySelectorAll(".second")
const minuteDiv= document.querySelectorAll(".minute")
const hourDiv= document.querySelectorAll(".hour")


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

//Functions | Onclick buttons
//Onclick buttons | Start

function showingCountDown(){
    document.getElementById("timer-block").style.display = "none" //Hiding timer block div
    document.getElementById("timer-countdown").style.display = "flex" //Showing the countdown

}
function showingResStopBtn(){
    document.getElementById("start-btn-div").style.display = "none" //Hiding start button
    document.getElementById("after-start-btn-div").style.display = "flex" //Showing Reset and Stop buttons 
}

function writeChosenTime(){
    document.getElementById("countdown-hour").textContent = document.getElementById("center-hour").textContent
    document.getElementById("countdown-minute").textContent = document.getElementById("center-minute").textContent
    document.getElementById("countdown-second").textContent = document.getElementById("center-second").textContent
}
//BUTTONS

//Buttons | start button
function clickStart(){
    
    writeChosenTime()
    showingResStopBtn()
    showingCountDown()
    
    
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


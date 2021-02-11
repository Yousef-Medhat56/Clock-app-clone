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
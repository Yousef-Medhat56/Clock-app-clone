//selectors

const hundredthSecond = document.getElementById("hundredth-of-second")
const startBtn = document.getElementById("start-btn")
const second = document.getElementById("second")
const seconDot = document.getElementById("second-dot")
const secondZero = document.getElementById("second-zero")
const afterStart = document.getElementById("btn-div-1")
const minute = document.getElementById("minute")
const minuteZero = document.getElementById("minute-zero")

const hour = document.getElementById("hour")
const hourZero = document.getElementById("hour-zero")


const stopResumeBtn = document.getElementById("pause-btn")
const lapBtn = document.getElementById("lap-btn")
//Variables
var hundredSec = 0

var sec = 0
var hr = 0
var min = 0
//functions names
var stopwatch;


//eventlisteners

startBtn.addEventListener("click" ,function(){
    clickStart()
    afterStart.style.display = "flex"
    startBtn.style.display = "none"
})


stopResumeBtn.addEventListener("click",function(){
    if (stopResumeBtn.textContent == "Stop"){
        clickStop()
    }
    else if (stopResumeBtn.textContent == "Resume"){
        clickResume()
    }
}) 
//functions

function clickStart(){
    stopwatch = setInterval(stopwatCounter,10)
}


function stopwatCounter(){
    //HUNDREDTH SECONDS
    hundredSec++ //Increasing the hundredth seconds 
    hundredthSecond.textContent = hundredSec 
    hundredthSecond.style.opacity=1 //Making them obvious
    
    //Seconds
    if(hundredSec >99){
        hundredSec= 0 
        sec++ //Increasing the  seconds 
        second.textContent = sec + "." //showing the seconds 
        second.style.opacity = 1 //Making them obvious
        

        //removing zero before second sections if seconds >9
        if(sec>9 && sec<59){
            secondZero.style.display = "none"
            
        }
        //Minutes
        else if(sec==59){
            sec = 0
            second.textContent = sec + "."
            //returning the zero before the second value if seconds < 9
            secondZero.style.display = "inline-block"
            secondZero.style.opacity = 1
            
            //minutes section
            min++ 
            minute.textContent = min +":"  //showing the minutes 
            minute.style.opacity = 1 // making them obvious


           //removing zero before minute sections if minutes >9 
            if(min >9 && min<60){
                minuteZero.style.display ="none" 
            }


            //Hours
            else if(min ==60){
                min = 0
                //returning the default values of minute section
                minute.textContent = min + ":"
                minuteZero.style.display = "inline-block"
                minuteZero.style.opacity = 1
            
                //Hour section
                hr++ //Increasing hours
                hour.textContent = hr +":" //Showing hours
                hour.style.display = "inline-block" //changing hour section display value
                hour.style.opacity = 1 //making it obvious
                hourZero.style.display = "inline-block" //adding the zero before the hour if hours <9


                //removing zero before hour sections if hours >9
                if(hr>9){
                    hourZero.style.display = "none"
                }
                
            }

        }

        
    }

}


function clickStop(){
    clearInterval(stopwatch)
    stopResumeBtn.textContent = "Resume"
    stopResumeBtn.style.color = "rgb(48, 190, 143)"
    lapBtn.textContent = "Reset"

}

function clickResume(){
    stopwatch =setInterval(stopwatCounter,10)
    stopResumeBtn.textContent = "Stop"
    stopResumeBtn.style.color = "red"
    lapBtn.textContent = "Lap"
}


//SELECTORS

//SELECTORS - Buttons
const startStopBtn = document.getElementById("start-btn") //Start and Stop buttons
const afterStartBtn = document.getElementById("after-start-btn") //<DIV> That contains resume and rest buttons 
const resumeBtn = document.getElementById("resume-btn") //Resume button
const resetBtn = document.getElementById("reset-btn") //Reset button


//SELECTORS - Time elements
const hundredthSecond = document.getElementById("hundredth-of-second") //hundredth-of-seconds
const second = document.getElementById("second") //Seconds
const secondZero = document.getElementById("second-zero") //the zero before seconds
const minute = document.getElementById("minute") //Minutes
const minuteZero = document.getElementById("minute-zero") //the zero before minutes
const hour = document.getElementById("hour") //Hours
const hourZero = document.getElementById("hour-zero") //the zero before hours



//Variables
let hundredSec = 0 //hundredth-of-seconds
let sec = 0 //seconds
let min = 0 //minutes
let hr = 0 //hours

//functions names
let stopwatch; //The setInterval function()


//Event listeners

//Clicking Start or Stop buttons
startStopBtn.addEventListener("click" ,function(){
    
    //Clicking Start button
    if (startStopBtn.textContent == "Start"){
        clickStart()
        startStopBtn.textContent = "Stop" //Changing the button text
        startStopBtn.style.color ="red" //Changing the button text color
        startStopBtn.style.outlineColor ="red" //Changing the button outline border color
    }

    //Clicking Stop buttons
    else if(startStopBtn.textContent == "Stop"){
        clickStop()
        afterStartBtn.style.display = "flex" //Appearing the after-start div
        startStopBtn.style.display = "none" // Removing stop button 
        startStopBtn.style.outlineColor ="rgb(48, 190, 143)" //Changing the button outline border color
    }
    
})

//Clicking resume button
resumeBtn.addEventListener("click",clickResume) 

//Clicking Reset button
resetBtn.addEventListener("click" , clickRestart)

//Functions


function clickStart(){
    stopwatch = setInterval(stopwatCounter,10) //Counting the hundredth of seconds
}

//making the time elements change
function stopwatCounter(){
    //HUNDREDTH SECONDS
    hundredSec++ //Increasing the hundredth seconds 
    hundredthSecond.textContent = hundredSec //showing the hundredth seconds 
    hundredthSecond.style.opacity=1 //Making them obvious
    
    //Seconds
    if(hundredSec >98){
        hundredSec= 0 
        
        sec++ //Increasing the  seconds 
        second.textContent = sec + "." //showing the seconds 
        second.style.opacity = 1 //Making them obvious
        

        //removing zero before second sections if seconds >9
        if(sec>9 && sec<60){
            secondZero.style.display = "none"
            
        }
        //Minutes
        else if(sec==60){
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

//clicking stop button
function clickStop(){
    clearInterval(stopwatch) //Stopping the stopwatch counter
}

//clicking resume button
function clickResume(){
    stopwatch =setInterval(stopwatCounter,10) //Returning the stopwatch counter to work
}

//clicking restart button
function clickRestart(){
    
    //Stopping the stopwatch counter
    clearInterval(stopwatch)
    //Variables values
    hundredSec =0
    sec = 0
    min = 0
    hr = 0

    //Buttons text
    hundredthSecond.textContent = "00"
    second.textContent = "0."
    minute.textContent = "0:"

    //Buttons text - Appearing the zeros before seconds or minutes if they are removed
    secondZero.style.display = "inline-block" 
    minuteZero.style.display = "inline-block"

    //Buttons text - Removing the hour section if it is appeared
    hour.style.display = "none"
    hourZero.style.display = "none"

    //Buttons text - the stopwatch  counter opacity 
    hundredthSecond.style.opacity = 0.5 
    second.style.opacity = 0.5
    secondZero.style.opacity = 0.5
    minute.style.opacity = 0.5
    minuteZero.style.opacity = 0.5
    
    
    //Styles
    afterStartBtn.style.display = "none" //Removing the after-start div
    startStopBtn.style.display = "block" //Showing start button
    startStopBtn.textContent = "Start" // The START button text
    startStopBtn.style.color = "rgb(48, 190, 143)" // The START button text color
    startStopBtn.style.outlineColor ="rgb(48, 190, 143)" // The START button outline border color
    
}

const hundredthSecond = document.getElementById("hundredth-of-second")
const startBtn = document.getElementById("start-btn")
const second = document.getElementById("second")
const seconDot = document.getElementById("second-dot")
const secondZero = document.getElementById("second-zero")

const minute = document.getElementById("minute")
const minuteZero = document.getElementById("minute-zero")

let x = 0;
let y = 0;
let z = 0;

startBtn.addEventListener("click" , function(){
    setInterval(hundredSeCount , 10)
    hundredthSecond.style.opacity =1;
})

function hundredSeCount(){
    x++
   hundredthSecond.textContent = x
    if (x == 99 ){
        //seconDot.style.opacity=1;
        second.style.opacity =1;
        x = 0;
        y++
        second.textContent =  y + "."
        if(y>9){
            secondZero.style.display = "none"
            if(y>58){
                y = 0;
                z++
                second.textContent = y + "."
                minute.style.opacity =1;
                minute.textContent = z + ":"
                secondZero.style.display = "inline-block" 
                secondZero.style.opacity =1;
            }
        if (z >9){
            minuteZero.style.display = "none"
        }
        }
    }

}



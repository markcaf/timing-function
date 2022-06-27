const start = document.querySelector(".btn-primary");
const stop = document.querySelector(".btn-success");
const reset = document.querySelector(".btn-danger");

let output_ms = document.getElementById("milliseconds");
let output_sec = document.getElementById("seconds");
let output_min = document.getElementById("minutes");

let clock;
let milliseconds = 0;
let timeRunning = false;
let seconds = 0;
let minutes = 0;

start.addEventListener("click", function () {
    if ( timeRunning === false){
    console.log("Inizia");
    clock = setInterval( function(){
        showOutput(output_ms, milliseconds);
        milliseconds++;

        if (milliseconds > 99){
            seconds++;
            milliseconds = 0;
            showOutput(output_sec, seconds);
        }

        if (seconds > 59){
            minutes++;
            seconds = 0;
            showOutput(output_min, minutes);
        }
    }, 10);
    timeRunning = true;
    } 
})

stop.addEventListener("click", function(){
    console.log("Stop");
    clearInterval(clock);
    timeRunning = false;
})

reset.addEventListener("click", function(){
    console.log("Reset");
    clearInterval(clock);
    counter = 0;
    output_ms.innerHTML = "00";
    output_sec.innerHTML = "00";
    output_min.innerHTML = "00";
    timeRunning = false;
})

function showOutput(output, counter){
    output.innerHTML = counter;
    if (counter < 10){
        output.innerHTML = "0" + counter;
    }
    return output;
}

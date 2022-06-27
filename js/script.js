const start = document.querySelector(".btn-primary");
const stop = document.querySelector(".btn-success");
const reset = document.querySelector(".btn-danger");

let output_ms = document.getElementById("milliseconds");
let output_sec = document.getElementById("seconds");
let output_min = document.getElementById("minutes");
let output_hours = document.getElementById("hours");

let clock;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeRunning = false;


start.addEventListener("click", function () {
    if ( timeRunning === false){
    console.log("Inizia");
    clock = setInterval( function(){
        padzero(output_ms, milliseconds);
        print(output_ms, milliseconds);
        milliseconds++;

        if (milliseconds > 99){
            seconds++;
            milliseconds = 0;
            padzero(output_sec, seconds);
            print(output_sec, seconds);
        }

        if (seconds > 59){
            minutes++;
            seconds = 0;
            padzero(output_min, minutes);
            print(output_min, minutes);
        }

        if (minutes > 59){
            hours++;
            minutes = 0;
            padzero(output_hours, hours);
            print(output_hours, hours);
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
    output_ms.innerHTML = "00";
    output_sec.innerHTML = "00";
    output_min.innerHTML = "00";
    output_hours.innerHTML = "00";
    timeRunning = false;
})

function print(output, counter){
    output.innerHTML = counter;
    return output;
}

function padzero(output, counter){
    if (counter < 10){
        output.innerHTML = "0" + counter;
    }
}




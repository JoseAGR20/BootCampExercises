//Write a function called countdown that accepts 
//a number as a parameter and every 1000 milliseconds 
//decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.

function countdown(time) {
    const timer = setInterval(function() {
        if (time === 0) {
            console.log("DONE!");
            clearInterval(timer);
        } else {
            console.log(time);
            time--
        }
    }, 1000);
}
/*Write a function called randomGame that selects a 
random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, add 
1 to a counter. If the number is greater than .75, 
stop the timer and console.log the number of tries 
it took before we found a number greater than .75.*/

//pick random number 0-1 every 1000millisecond.
//for each random number 0-1, add 1 to a counter.
//if random number >.75, stop the timer 
//console.log number of tries

function randomGame(){
    let nums;
    let tries = 0;
    let timer = setInterval(function(){
        nums = Math.random();
        tries ++;
        if (nums > .75) {
            clearInterval(timer);
            console.log ("It took " + tries);
        }
    }, 1000);
}
let d = new Date();
let time = d.toLocaleTimeString();
//console.log(time);

setInterval(setTimeInterval, 1000, d, time);

function setTimeInterval(day, time){
    day = new Date();
    time = day.toLocaleTimeString();
    console.log(time);
}

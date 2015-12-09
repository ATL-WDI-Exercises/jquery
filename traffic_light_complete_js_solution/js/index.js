console.log('traffic light');

function turnLightsOff() {
    document.getElementById('stopLight').style.backgroundColor = 'black';
    document.getElementById('slowLight').style.backgroundColor = 'black';
    document.getElementById('goLight').style.backgroundColor = 'black';
}

function turnRed() {
    turnLightsOff();
    document.getElementById('stopLight').style.backgroundColor = 'red';
}
// better name illuminateStop- if you think the color might change

function turnYellow() {
    turnLightsOff();
    document.getElementById('slowLight').style.backgroundColor = 'yellow';
}

function turnGreen() {
    turnLightsOff();
    document.getElementById('goLight').style.backgroundColor = 'green';
}

document.getElementById('stopButton').onclick = turnRed;

document.getElementById('slowButton').onclick = turnYellow;

document.getElementById('goButton').onclick = turnGreen;

// Brian Lackey Solution:

// var stopLight = function(button, light, color) {
//   document.getElementById(button).addEventListener("click", function() {
//     var bulb = document.getElementById(light);
//     bulb.style.backgroundColor = color;

//     if(color === "red") {
//       document.getElementById("slowLight").style.backgroundColor = "black";
//       document.getElementById("goLight").style.backgroundColor   = "black";
//     }
//     else if(color === "yellow") {
//       document.getElementById("stopLight").style.backgroundColor = "black";
//       document.getElementById("goLight").style.backgroundColor   = "black";
//     }
//     else {
//       document.getElementById("stopLight").style.backgroundColor = "black";
//       document.getElementById("slowLight").style.backgroundColor = "black";
//     } 
//   });
// };

// stopLight("stopButton", "stopLight", "red");
// stopLight("slowButton", "slowLight", "yellow");
// stopLight("goButton", "goLight", "green");



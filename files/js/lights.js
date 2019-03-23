// Original project from https://codepen.io/nevan/pen/shtLA


// Functions for controlling turning the lights off and on
function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('goLight-R').style.backgroundColor = "green";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  document.getElementById('stopLight-R').style.backgroundColor = "red";
}

function illuminateYellowR() {
  clearLights();
  document.getElementById('slowLight-R').style.backgroundColor = "yellow";
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById('stopLight-R').style.backgroundColor = "red";
}

// This function shuts all of the lights off to ensure when one light turns on
// others turn off
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
  document.getElementById('stopLight-R').style.backgroundColor = "black";
  document.getElementById('slowLight-R').style.backgroundColor = "black";
  document.getElementById('goLight-R').style.backgroundColor = "black";
}

// These functions control the status lights in the control panel
function statusGood() {
  document.getElementById('statusLightBad').style.backgroundColor = "black";
  document.getElementById('statusLightGood').style.backgroundColor = "green";
}

function statusBad() {
  document.getElementById('statusLightBad').style.backgroundColor = "red";
  document.getElementById('statusLightGood').style.backgroundColor = "black";
}

// Control the order of the lights under normal circumstances
function lightSequence(reps) {
  console.log("lightSequence");
  setTimeout(function() {
    illuminateGreen();
  }, reps * 1000);
  setTimeout(function() {
    illuminateYellow();
  }, reps * 2000);
  setTimeout(function() {
    illuminateRed();
  }, reps * 3000);
  setTimeout(function() {
    illuminateYellowR();
  }, reps * 4000);
}

// This is the default "normal" timer function to control the lights
function timer(ctr) {
  ctr = typeof ctr !== 'undefined';
  statusGood();
  lightSequence(3);
  setInterval(function() {
    lightSequence(3);
    if (ctr > 0) {
      timer(ctr - 1);
    }
  }, 13000);
}

// This is when the lights go bonkers
function haywire(reps) {
  console.log("haywire");
  setTimeout(function() {
    illuminateGreen();
  }, reps * 500);
  setTimeout(function() {
    illuminateYellow();
  }, reps * 1000);
  setTimeout(function() {
    illuminateYellowR();
  }, reps * 1500);
  setTimeout(function() {
    illuminateRed();
  }, reps * 2000);
}

// This is the timer for the out of control lights
function badTimer(ctr) {
  ctr = typeof ctr !== 'undefined';
  statusBad();
  haywire(1);
  setInterval(function() {
    haywire(1);
    if (ctr > 0) {
      timer(ctr - 1);
    }
  }, 2500);
}

// Reset the lights to a normal pattern when the "Start" button is pushed
document.getElementById("startButton").onclick = timer();

// Stop running the lights when the "Stop" button is pushed
//document.getElementById("stopButton").onclick

//timer();
//badTimer();
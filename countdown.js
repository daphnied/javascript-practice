//Write a while loop that counts down from 60 seconds and
//If theres a task being completed, it prints out the task
//If there is no task being completed, it prints out the time as t minus x seconds //




var x = 60;

while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (x === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (x === 6) {
    console.log("Main engine start");
  } else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
      console.log("T-" + x + " seconds")
  }
  x--;
}

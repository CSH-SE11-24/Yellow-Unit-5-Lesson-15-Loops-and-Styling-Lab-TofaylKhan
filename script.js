console.log("Script running...");
// Task 1: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
let csh = document.querySelector("#csh")


// Select the body and console log to confirm you selected successfully
let bulb = document.querySelector("body")


// Add an event listener such that when you click the CSH mode button, the background color of body becomes green
csh.addEventListener("click", function(event){
  bulb.style.backgroundColor = "green"
})





// Task 2: All off button
// Select the all off button and console log to confirm you selected successfully
let clear = document.querySelector("#clear")

// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let lightbulb = document.querySelector("lightbulb")

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black
clear.addEventListener("click", function(event){
    lightbulb.style.backgroundColor = "black"
})




// Task 3: On and off feature
// Add an event listener to the FIRST lightbulb such that when you click it, the background color of that p tag changes to white
  lightbulb.addEventListener("click", function(event){
     lightbulb.style.backgroundColor = "white"
 })





// Extra credit: try to use a for loop to make every lightbulb's background color to change when you click it







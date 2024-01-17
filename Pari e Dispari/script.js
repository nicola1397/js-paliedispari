const inputNumber = document.getElementById("number");
const evenButton = document.getElementById("pari");
const oddButton = document.getElementById("dispari");
const outputNumber = document.getElementById("userNumber");
const cpuNumber = document.getElementById("cpuNumber");
const result = document.getElementById("somma");
const winner = document.getElementById("winner");

let number;
let cpu;
let sum;
let value;
let choice;

evenButton.addEventListener("click", function () {
  choice = "pari";
  check();
});

oddButton.addEventListener("click", function () {
  choice = "dispari";
  check();
});

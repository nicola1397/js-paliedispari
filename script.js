const inputTextWord = document.getElementById("parola");
const sendButton = document.getElementById("button");
const showWord = document.getElementById("word");
const showReverse = document.getElementById("wordrev");
const result = document.getElementById("resultword");

let word;

sendButton.addEventListener("click", pali);

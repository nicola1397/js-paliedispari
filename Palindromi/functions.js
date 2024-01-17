function pali(word) {
  let reversedWord = [];
  word = inputTextWord.value.toLowerCase();
  console.log(word);
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  showWord.innerText = "Parola inserita - " + word;
  showReverse.innerText = "Parola invertita - " + reversedWord;

  if (reversedWord == word) {
    result.innerText = "La parola è palindroma";
  } else {
    result.innerText = "La parola non è palindroma";
  }
}

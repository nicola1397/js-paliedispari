function check(number) {
  number = parseInt(inputNumber.value);
  console.log("numero utente " + number);

  if (isNaN(number) || number > 5) {
    alert("Il numero inserito non è corretto! Inserisci un numero da 1 a 5");
    inputNumber.value = ``;
  } else {
    cpu = Math.floor(Math.random() * 5 + 1);
    console.log("numero cpu " + number);

    sum = number + cpu;
    console.log("somma " + sum);

    outputNumber.innerText = "Il tuo numero - " + number;
    cpuNumber.innerText = "Il numero della cpu - " + cpu;

    if (sum % 2 == 0) {
      result.innerText = sum + "- Il numero è pari!";
      value = "pari";
      console.log("hai scelto:" + choice, "il risultato è:" + value);
    } else {
      result.innerText = sum + "- Il numero è dispari!";
      value = "dispari";
      console.log("hai scelto:" + choice, "il risultato è:" + value);
    }

    if (choice == value) {
      winner.innerText = "Hai vinto!";
    } else {
      winner.innerText = "Hai perso!";
    }
  }
}

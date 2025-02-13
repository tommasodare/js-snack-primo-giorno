/* L’utente inserisce due numeri in successione, con due prompt.

Il software stampa il maggiore */

const firstNumber = prompt("Inserisci un numero a scelta")
const secondNumber = prompt("Inserisci un numero a scelta")

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
} else {
    console.log("I due numeri sono uguali");
}
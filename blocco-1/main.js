/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore */

const firstNumber = Number(prompt("Inserisci un numero a scelta"))
const secondNumber = Number(prompt("Inserisci un numero a scelta"))

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Invalid")
} else if (firstNumber > secondNumber) {
    console.log(`Il primo numero ${firstNumber} è maggiore del secondo numero ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`Il secondo numero ${secondNumber} è maggiore del primo numero ${firstNumber}`);
} else {
    console.log("I due numeri sono uguali");
}
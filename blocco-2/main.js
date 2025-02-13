/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt("Type first word")
const secondWord = prompt("Type second word")

const myFirstWord = firstWord.length
const mySecondWord = secondWord.length

if (myFirstWord > mySecondWord) {
    console.log(firstWord);
    console.log(secondWord);
} else if (myFirstWord < mySecondWord) {
    console.log(secondWord);
    console.log(firstWord);
} else {
    console.log("The words are equal long");
    
}
/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const array = []

for (let index = 0; index < 6; index++) {
    const userNumber = Number(prompt("Type a number"))
    if (userNumber % 2 !== 0) {
        array.push(userNumber)
    }
}
console.log(array);

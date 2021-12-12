// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// Creiamo la costante
const boxContainer = document.querySelector('.container');

// Creiamo un ciclo for
for(let i = 1; i <= 100; i++) {
    
    let FizzOrBuzzOrBoth = i;

    if (i % 3 === 0 && i % 5 === 0) {
        FizzOrBuzzOrBoth = "fizzbuzz";
    } else if ( i % 5 === 0) {
        FizzOrBuzzOrBoth = "buzz";
    } else if (i % 3 === 0) {
        FizzOrBuzzOrBoth = "fizz";
    }

    const newBox = `
        <div class="box">${FizzOrBuzzOrBoth}</div>
    `;

    boxContainer.innerHTML += newBox;
}
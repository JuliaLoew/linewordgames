// Stein Papier Schere
console.log(process.argv); 
const args = process.argv.slice(2);


// Zufallseingabe vom Computer
const elements = ['Stein', 'Papier', 'Schere'];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const randomElement = getRandomElement(elements);
console.log(randomElement);


// Prüfen wer gewonnen hat
    if (args == randomElement) {
        console.log('Unentschieden');} 
        
    else if (args == "Schere", randomElement == "Papier") {
        console.log('Du hast Schere gewählt, der Computer Papier. Du hast gewonnen');} 

    else if (args == "Schere", randomElement == "Stein") {
        console.log('Du hast Schere gewählt, der Computer Stein. Du hast verloren');} 

    else if (args == "Papier", randomElement == "Stein") {
        console.log('Du hast Papier gewählt, der Computer Stein. Du hast gewonnen');} 

    else if (args == "Papier", randomElement == "Schere") {
        console.log('Du hast Papier gewählt, der Computer Schere. Du hast verloren');} 

    else if (args == "Stein", randomElement == "Schere") {
        console.log('Du hast Stein gewählt, der Computer Schere. Du hast gewonnen');}     

    else if (args == "Stein", randomElement == "Papier") {
            console.log('Du hast Stein gewählt, der Computer Papier. Du hast verloren');}    

     else {
    console.log ("no Match")
    }


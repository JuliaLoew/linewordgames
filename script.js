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
        console.log('gewonnen');} 

    else if (args == "Schere", randomElement == "Stein") {
        console.log('verloren');} 

    else if (args == "Papier", randomElement == "Stein") {
        console.log('gewonnen');} 

    else if (args == "Papier", randomElement == "Schere") {
        console.log('verloren');} 

    else if (args == "Stein", randomElement == "Schere") {
        console.log('gewonnen');}     

    else if (args == "Stein", randomElement == "Papier") {
            console.log('verloren');}    

     else {
    console.log ("no Match")
    }


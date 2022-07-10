const words = ['luxury', 'vacation', 'friendship', 'ripple', 'tide', 'sunset', 'beginning', 'hope', 'intention', 'adversity', 'creation', 'rain', 'storm', 'difficult', 'new', 'excitement', 'curiosity']
// can decide between positive, neutral, and negative or something similar, maybe like "heavy" vs. "light" or "deep thought" vs "quick post"

function getRandomWord(words) {

    const randomIndex = Math.floor(Math.random() * words.length);

    const randomWord = words[randomIndex];

    return randomWord;
}

const randomWordSelected = getRandomWord(words);
const wordDisplayed = document.getElementById('wordDisplay');
wordDisplayed.innerHTML = randomWordSelected;

// TO-DO: 
// update function to ensure no repetition until array has been cycled through
// get API key for dictionary API
// write function to fetch definition
// create database of words to pull from
// OR find out if merriam webster has words indexed, if so use randomization and pull word directly


// function getDictionaryDefinition() {
//     const 
// }
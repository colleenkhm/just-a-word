var words = ['luxury', 'vacation', 'friendship', 'ripple', 'tide', 'sunset', 'beginning', 'hope', 'intention', 'adversity', 'creation', 'rain', 'storm', 'difficult', 'new', 'excitement', 'curiosity', 'foundation', 'comfort', 'camping', 'struggle', 'defiance', 'benevolence', 'authentic', 'cumbersome', 'unrelenting', 'antiquated', ];
var ranWords = [];
var i = words.length;
var j = 0;


// can decide between positive, neutral, and negative or something similar, maybe like "heavy" vs. "light" or "deep thought" vs "quick post", maybe a "vocab-learning" mode where it's more difficult words?

function getRandomWord() {
    console.log(words)
    j = Math.floor(Math.random() * (i+1));
    ranWords.push(words[j]);
    words.splice(j, 1);
    console.log(words)
}

const randomWordSelected = getRandomWord(words);
    const wordDisplayed = document.getElementById('wordDisplay');
    wordDisplayed.innerHTML = randomWordSelected;
// // let newArr = []
// // function filterWords() {
// // for (let i = 0; i < words.length; i++) {
// //   if (words[i].length > 6) {
// //     newArr.push(words[i])
// //   }
// // }

// // console.log(newArr)
// // }

// // filterWords();

// // let newArr = []

// // for (let i = 0; i < words.length; i++) {
// //   if (words[i].length > 6) {
// //     newArr.push(words[i])
// //   }
// // }
// // console.log(newArr)

// // TO-DO: 
// // update function to ensure no repetition until array has been cycled through
// // get API key for dictionary API
// // write function to fetch definition
// // create database of words to pull from
// // OR find out if merriam webster has words indexed, if so use randomization and pull word directly


// // function getDictionaryDefinition() {
// //     const 
// // }

// const randomIndex = Math.floor(Math.random() * words.length);

// const randomWord = words[randomIndex];
// let usedWordsArray = [];
// // const usedWords = [];

// if (usedWordsArray.includes(randomWord)) {
//     getRandomWord()
// } else {
// usedWordsArray = JSON.parse(localStorage.getItem("usedWords")) || [];
// words.splice(randomIndex, 1)
// usedWordsArray.push(randomWord);
// localStorage.setItem("usedWords", JSON.stringify(usedWordsArray))
// console.log(usedWordsArray)
// return randomWord;
// }
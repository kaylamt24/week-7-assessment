


//Complex loops is def. my weakness and it is something that I am working on. I understand what it is asking me to do, but executing it correctly is where I struggle. Once I listen to someone explain it, I am like oh yeah! That makes total sense but trying to put it together in my head just based on reading it, I struggle with. I gave it my best shot so I will take this as a HUGE learning experience

// I have been slacking on codewars and coding everyday so that is where I have failed myself. Hopefully it is just small things that I am missing. 





//////////////////////////////////////////////////////////// ONE

// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

// let sum = [1, 2, 3, -2]

// const addToZero = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//     let sum = arr[i]
//         for (let j = 0; j < arr.length; j++){
//             let sumNum = arr[k]
//                 if (sum + sumNum === 0 && i !== k){
//                     console.log('true')
//                 } else {
//                     console.log('false')
//                 }
//                 // return true
//         } 
//         }
//         // return false
//     }
    
// console.log(addToZero[1, 2, 3, -2])
// console.log(addToZero)


let arr = [1, 2, 3, -2]

let value = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)



//nested 4 loops are always 0(n^2)



////////////////////////////////////////////////////// Joely's way of coding it. 

let addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i !== j) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
} 
    return false
}

// console.log(addToZero([]));
// console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));







//////////////////////////////////////////////////////////// TWO
// Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False



let hasUniqueCharsOne = (input) => {
    let uniqueCharsOne = []
      for(let i = 0; i < input.length; i++){
          if(input.indexOf(input[i]) === i){
             uniqueCharsOne.push(input[i])
                // return true
             } 
            //  return uniqueCharsOne.join('')

             }
             return uniqueCharsOne.join('')

    }
    // console.log('help me')

    // console.log(hasUniqueCharsOne('Monday'))
    // console.log('help me please')

    // console.log(hasUniqueCharsOne('Mooooooooooonday'))
    // console.log('I do not understand why it is logging a blank line or undefined.')

    // uniqueCharsOne('Monday')
    // console.log('help')


    // console.log('help')




let hasUniqueChars = (input) => {
      for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
          if(input[i] === input[j]){
                return false
             } 
             }
            //  console.log('////false')

    }
   return true
}
  



// //0(n^2) - nested for loop


console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moooonday'))





//////////////////////////////////////////////////////////// THREE
// Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // // -> True

// isPangram("I like cats, but not mice");
// // -> False


// const isPangram = (input) => {

// }

// let isPangram = (input) => {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let permStorage = []
//     for(let i = 0; i < alphabet.length; i++){
//         if(permStorage.indexOf(alphabet[i] === 1)){
//             console.log('No')
//         } else {
//             console.log('yes')
//         }
//     }
// }

// console.log()


let isPangram = (input) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split()
    input = input.toLowerCase()

   
    for(let i = 0; i < alphabet.length; i++){
        let letter = input[i]
        let index = alphabet.indexOf(letter)
        if (index !== -1){
            alphabet.splice(index, 1)
        }


    }
    if(alphabet.length === 0){
        return true
    } else {
        return false
    }
}

isPangram("The quick brown fox jumps over the lazy dog!");


isPangram("I like cats, but not mice");



// 0(n)




//////////////////////////////////////////////////////////// FOUR
// Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5



// let findLongestWordOne = (arr) => {
//     let result = 0;
//     arr.forEach(words => {
//         if (words.length > result){
//             result = words.length
//         }
//     })
//     return word.length
// }

// findLongestWordOne('Hello', 'Hi', 'supercalofra')


// let findLongestWord = (input) => {
//     let biggest = 0
//     for(let i = 0; i < input.length; i++){
//         if(input[i].length > biggest){
//             biggest = input[i].length
//         } 
//     } 
//     return biggest
// }

// findLongestWord('Hello', 'Hi')

// 0(n)
// Creating a function that takes a number as an argument. Add up all the numbers from 1 
// to the number you passed to the function. For example, 
// if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

function addUP(number){
    return (number*(number+1))/2
}
console.log(addUP(4));
console.log(addUP(10));
console.log(addUP(100));
//Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
function sortByLength(arr){
    return arr.sort((a,b) =>a.length-b.length)
}
console.log(sortByLength(["Turing", "Einstein", "Jung"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); 
//avaScript function that takes a string of space-separated numbers and 
// returns the highest 
// and lowest number as a string:
// function highLow(numbers){
function highLowNum(numbers){
    // convert input string into an array of numbers
    numArray = numbers.split('').map(Number);
    // find the highest and lowest numbers
    const max= Math.max(...numArray) ;
    const min = Math.min(...numArray)
    //return result as string
    return `${max} ${min}`
}

console.log(highLowNum("1 2 3 4 5"));
// function highLow(numbers) {
//     // Convert the input string into an array of numbers
//     const numArray = numbers.split(' ').map(Number);
  
//     // Find the highest and lowest numbers
//     const max = Math.max(...numArray);
//     const min = Math.min(...numArray);
  
//     // Return the result as a string
//     return `${max} ${min}`;
//   }
  
//   // Examples
//   console.log(highLow("1 2 3 4 5"));    // "5 1"
//   console.log(highLow("1 2 -3 4 5"));   // "5 -3"
//   console.log(highLow("1 9 3 4 -5"));   // "9 -5"
//   console.log(highLow("13"));           // "13 13"

function getSquare(n){
    return n*n

}
console.log(getSquare(9));
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
//Create a function that takes an array of numbers 
// and return both the minimum and maximum numbers, in that order.

const arr1 = [12,14,17,20,21,22]
const arr2= [1]
function getMinAndMax(arr){
    //getting min and max
    min = Math.min(...arr)
    max = Math.max(...arr)
    return  `${min},${max}`
}
console.log(getMinAndMax(arr1));
console.log(getMinAndMax(arr2));

// arrays ,Return only numbers in the years array greater than 1950.
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

// function getYears(years) {
//     return years.filter(year=>year>195)
// }
//  console.log(getYears(years));
 function getYears(years){
    const result = []
    for (let i= 0; i< years.length; i++) {
        if (years[i]>1950) {
            result.push(years[i])
            
        }
       
    }
    return result;
 }
console.log(getYears(years));

function areaOfSquare(side){
    return side*side;

}
console.log('area of sphere is ',areaOfSquare(10));
function calculatePerimeter(l,num){
    if(l==="s"){
        return 4*num;
    }else if(l==="c"){
        return 6.28*num
    }

    }
    console.log(calculatePerimeter('s', 5));
    console.log(calculatePerimeter('c', 5));
    console.log(calculatePerimeter('c', 10));
    console.log(calculatePerimeter('c', 12));

//Create a function that takes the age in years and returns the age in days.

 function calculateAge(age){
    return age*365
 }
console.log(calculateAge(100));

//Create a function that takes an array of numbers and return "Boom!" 
// if the digit 7 appears in the array. Otherwise, return "there is 
// no 7 in the array".


function displayDigit(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) {
      return "Boom";    
    }
  }
  return "the no number 7 in the array";
}
console.log(displayDigit([1, 2, 3, 4, 5, 6, 9]));

// flattening arrays
const arrayOfArrays1 = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrayOfArrays1.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

const arrayOfArrays2 = [[1,2,9],[10,11,12],[14,15,16]]
const flattenedArr = arrayOfArrays2.flat();
console.log(flattenedArr);


const primeNumbers = [2, 3, 5, 7, 11, 13];
function  getTheLargestPrimeNumber(primeNumbers){
 max = Math.max(...primeNumbers)
 return `${max}`;
}
console.log(getTheLargestPrimeNumber(primeNumbers));
// function that removes duplicate

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

const arr = [1,2,3,4,5,5,5];
const newArr = [...new set(arr)];
console.log(newArr);

// calculate sum of numbers with in array


function Add(numbers){
    const arr12 = [12, 14, -4, -20, 17, 18, 19.5];
    let sum =0;
    for (let i= 0; i<arrayNum.length; i++) {
        sum += arrayNum[i];
        
    }
    return sum;
}
console.log(Add());
// calculate sum of numbers with in array

function addNumbers(numbers) {
  const arrayNum = [12, 14, -4, -20, 17, 18, 19.5,-40];
  let sum = 0;
  for (let i = 0; i< arrayNum.length; i++) {
    sum += arrayNum[i];
  }
  return sum;
}
console.log(addNumbers());


function reversedArray(fruits){
   return  fruits.reverse();
}
console.log(reversedArray(["Mangoes", "Oranges", "Bananas"]));

//
// function filterOutNegatives(arr) {
//     // Use the filter method to create a new array with only positive numbers
//     return arr.filter(function(number) {
//         return number >= 0;
//     });
// }

// // Example usage:
// const inputArray = [1, -2, 3, -4, 5, -6];
// const filteredArray = filterOutNegatives(inputArray);
// console.log(filteredArray); // Output: [1, 3, 5]

// function that filters an array and return only positive numbers
 function filterNegativeNumbers(arrNumbers){
       let filteredArr = [];
       for (let i = 0; i <arrNumbers.length; i++) {
             if(arrNumbers[i]>=0){
               filteredArr.push(arrNumbers[i])
             }
              
       }
       return filteredArr
 }
 console.log(filterNegativeNumbers([1, -2, 3, -4, 5, -6]));
 // Remove the spaces found in a string
 function removeSpace(string){
     return string.replace(/\s/g,"");
 }
 console.log(removeSpace("E l i e"));
 // create  a function that Returns a Boolean if a number is divisible by 10
 function isVisibleBy10(num){
    if (num%10==0){
       return true
    }else{
       return false;
    }
 }
 console.log(isVisibleBy10(54));
 //create a function that’ll return an integer of the number of vowels
 //  found in a string.
 function countVowels(str){
       const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
       let count =0;
       for(char of str){
              if(vowels.includes(char)){
                     count++;
              }
       }
       return count;
 }
 console.log(countVowels("javascript"));
 // you’ll write a function that takes an array of numbers as an input 
 // and returns the largest number in that array
 function largestNumber(arr){
       
       for (let i = 0; i < arr.length; i++) {
              max = Math.max(...arr)
              
       }
       return  `${max}`;
 }
 console.log(largestNumber([1,2,3,4,5,5,10]));
 //
 function sayBoom(arrayNumbers){
   for (let i = 0; i <arrayNumbers.length; i++) {
     
       if (String(arrayNumbers[i]).includes("3")) {
         return "boom";
       
       }
     
   }
     return "there is no 3 in the array";
 }
  
console.log(sayBoom([1, 2, 3, 4, 5]));

//Create a function which returns the number of true values
//  there are in an array
  function countTrueValues(arr){
       let count =0;
       for (let i = 0; i < arr.length; i++) {
            if(arr[i]==="true"){
              count++;
            }
              
       }
       return count;
  }
  console.log(countTrueValues(["true", "true", "true", "false", "true"]));
  // Create a function that converts Celsius to Fahrenheit and vice versa.
 
  function convertTemperature(temp,unit){
    if(unit=='F'){
       return (temp-32)*5/9;
    }else if(unit=="C"){
       return (temp* 9/ 5)+32
    }else{
       return "enter a valid unit";
    }
  }
  console.log(convertTemperature(100,'C'));
  console.log(convertTemperature(212, "f"));

  //
  function seriesResistance(R1,R2,R3){
       return R1+R2+R3;
  }
  console.log(seriesResistance(3,4,2));
  //Create a  javascript function that takes an array of non-negative integers and strings and 
  // return a new array without the strings.

  function filterOutStrings(arr){
       return arr.filter(element=> typeof element !=="string")
  }
  console.log(filterOutStrings( [1,'apple',2,'banana',3,'cherry',4]));
  //Create a function that calculates the number of 
  // different squares in an n * n square grid.
  function calculateSquare(n){
       return n*n ;
   }
   console.log(calculateSquare(7));
   console.log(calculateSquare(10));

   //Create a function that takes two numbers 
   // as arguments (num, length) and returns an array 
   // of multiples of num until the array length reaches length.

   function getMultiples(num,length){
       let multiples = []
       for (let i=1 ; i<=length ; i++) {
            multiples.push(num*i);       
       }
       return multiples;
   }
   console.log(getMultiples(7,5));

   function add(number){
       return (number*(number+1))/2
   }
   console.log(add(4));
   ///You get an array of numbers, return the sum of
   // all of the positives ones.

   function arrayPostiveNumbers(arr){
       positiveNum = [];
       for (let i = 0; i <arr.length; i++) {
            if(arr[i]>=0){
              positiveNum.push(arr[i]);
            }
              
       }
       return positiveNum;
   }
   console.log(arrayPostiveNumbers([12,-6,-7,13,14,15]));
   //

   function generateHashtag(str) {
    // Check if the input is empty or the resulting hashtag would be too long
    if (!str || str.trim().length === 0) {
        return false;
    }

    // Split the string into words, capitalize the first letter of each word, and join them
    const hashtag = '#' + str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    // Check if the final hashtag is longer than 140 characters
    if (hashtag.length > 140) {
        return false;
    }

    return hashtag;
    }

// Example usage:
console.log(generateHashtag("hello world")); // Output: "#HelloWorld"
console.log(generateHashtag("")); // Output: false
console.log(generateHashtag(" ".repeat(141))); // Output: false
console.log(generateHashtag("this is a very long string that should not be converted into a hashtag because it exceeds the character limit of one hundred and forty characters")); // Output: false

//
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
console.log(myArray);

function cubed(num) {
  return num * num * num;
}
console.log(cubed(3));
function getPower(x,n){
       return x**n;
}
console.log(getPower(2,3));
// function that count the digits with out using a string

function countDigits(num){
 
  if(num===0) 
    return 1
  //Loop to count digits
   num = Math.abs.apply(num);
   let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10); // Remove the last digit
        count++; // Increment the count
    }
    return count;
}
console.log(countDigits(123456789));

// javascript challenges


function addEvenNumbers(n){
  let  sum =0;
  for (let i= 1; i<=n; i++) {
    if(n%2===0){
      sum += i
    }
    
  }
  return sum;
}
console.log(addEvenNumbers(6));

function convertToUpperCase(text){
  return text.split(',')
}
console.log(convertToUpperCase("hello world"));

function sortArray(arry){
  return arry.sort((a,b)=> a-b);
}
console.log(sortArray([1,2,3,4,7,0,6,8,-7,-1,-3,11,19,17]));

//avaScript function that checks if one of the two numbers is 100 or
//  if their sum equals 100:

function isOneOrSum100(num1, num2) {
    // Check if either number is 100 or if their sum is 100
    return num1 === 100 || num2 === 100 || (num1 + num2) === 100;
}

// Example usage:
console.log(isOneOrSum100(100, 50)); // true (one of the numbers is 100)
console.log(isOneOrSum100(50, 50));  // true (sum is 100)
console.log(isOneOrSum100(20, 30));  // false (neither condition is met)
function isEqualTo100(num1,num2){
  if(num1===100|| num2===100|| num1+num2===100){
    return true;
  }else{
    return false;
  }
}
console.log(isEqualTo100(1,0));
const  isEqual100 =(a,b) => a===100 || b===100|| a+b ===100;
console.log(isEqual100(100,20));

// functions that returns the date of today
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensures two-digit format
  const day = String(today.getDate()).padStart(2, "0"); // Ensures two-digit format
  return `${year}-${month}-${day}`;
}

console.log(getTodayDate());

function getDate(){
  const today = new Date();
  const year= today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() ).padStart(2, "0");
  return `${year}-${month}-${day}`
}
console.log(getDate());
// creating javascript that creating "New!"




function addNew(string1){
  let firstWordIndex = string1.indexOf("New");
  if(firstWordIndex===0){
    return string1;
  }else{
    return `New ${string1}`
  }
}

console.log(addNew("update"));
console.log(addNew("New world"));

// create a jvascript function that takes first three
//  characters and 2 last characters from a string and add them to form a new string  the string  methods must be 3 or more 
// if not  the original string is returned

function createNewString(inputString){
  if(inputString.length<3){
    return inputString;
  }
  const firstThree= inputString.substring(0,3);
  const lastTwo= inputString.substring(inputString.length-2)                                                            
  const NewString = firstThree+lastTwo;
  return NewString;
}
console.log(createNewString("Alexandre"));
 const makeNewString =  (text) => 
     text.length<3 ? text : text.slice(0,3)+ text.slice(-3);
 console.log(makeNewString("machinery"));
 //  
 function nearestTo100(a, b) {
    // Calculate the absolute difference between each value and 100
    const diffA = Math.abs(a - 100);
    const diffB = Math.abs(b - 100);

    // Compare the differences and return the appropriate value
    if (diffA < diffB) {
        return a;
    } else if (diffB < diffA) {
        return b;
    } else {
        return "Both values are equally close to 100.";
    }
}
console.log(nearestTo100(95, 105)); // Output: 95
console.log(nearestTo100(102, 98));  // Output: 98
console.log(nearestTo100(100, 100));

function closestTo100(a,b){
  if(100-a<100-b){
    return a;
  }else{
    return b;
  }
}
console.log(closestTo100(52,59));

// write a javascript functions that returns even numbers 
// in an  array

function getEvenNumbers(arr){
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 ===0){
      evenNum.push(arr[i]);
    }
    
  }
  return evenNum;
}
console.log(getEvenNumbers([1,2,4,5,6,7,8,9,10,11,12]));
// write a javascript functions that returns even numbers up 
// to a given number
function getEvenNumbersUpTo(maxNumber){
      const evenNums = [];
      for (let i = 1; i <=maxNumber; i++) {
        if (i%2===0) {
          evenNums.push(i)
        }
        
      }
      return evenNums;
}
console.log(getEvenNumbersUpTo(9));

//create a javascript function where Given a sequence of integers,
//  return the sum of all the integers that have an even index
//  (odd index in COBOL), multiplied by the integer at the last index.

function sumOfEvenIndex(numsArr){
  if (numsArr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numsArr.length; i += 2) {
     sum += numsArr[i];

    }
    const lastElement = nums[numsArr.length-1];
    return sum * lastElement;
  }

console.log(sumEvenIndexesAndMultiplyByLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



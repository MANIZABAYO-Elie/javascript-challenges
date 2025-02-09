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
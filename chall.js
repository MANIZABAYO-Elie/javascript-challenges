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

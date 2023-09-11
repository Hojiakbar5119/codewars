//! 1 first to legends numbers

//? Tidy Number (Special Numbers Series #9)


// function tidyNumber(number) {
//     const numString = number.toString(); // Convert the number to a string
//     const numArray = numString.split(""); // Split the string and convert each character to a number
//     for(let i=0; i<numArray.length; i++){
//         console.log(i + "\t  => \t" + numArray[i])
//         const firsnums = parseInt(numArray[i]);
//         const secondnums = parseInt(numArray[i+1]);

//         if(firsnums>secondnums){
//             return false
//         }
//     }
//     console.log(numArray); // Output: [1, 2, 3, 4, 5]

//     // console.log();
// }
// tidyNumber(12345)


// function tidyNumber(number) {
//     const numString = number.toString(); // Convert the number to a string
//     const numArray = numString.split("").map(Number); // Split the string and convert each character to a number
  
//     for (let i = 0; i < numArray.length - 1; i++) {
//       const firstDigit = numArray[i];
//       const secondDigit = numArray[i + 1];
  
//       if (firstDigit > secondDigit) {
//         return false; // Digits are not in non-decreasing order
//       }
//     }
  
//     return true; // Digits are in non-decreasing order
//   }
  
//   // Example usage:
//   console.log(tidyNumber(3716581)); // Output: false
//   console.log(tidyNumber(123));     // Output: true
  


/* function tidyNumber(number) {
    const numString = number.toString(); // Convert the number to a string
    const numArray = numString.split(""); // Split the string and convert each character to a number
  
    for (let i = 0; i < numArray.length; i++) {
      const firstDigit = numArray[i];
      const secondDigit = numArray[i + 1];
  
      if (firstDigit > secondDigit) {
        return false; // Digits are not in non-decreasing order
      }
    }
  
    return true; // Digits are in non-decreasing order
  }
*/


//!  this how many times each letters appears in the array 'arr2' you can create a function  to do so, Heres Javascript function that counts the occurrences of each letter
// function countlettersInArray(arr){
//     const letterCounts = {}
//     for(const word of arr){
//         for(const letter of word){
//             if(letterCounts[letter]){
//                 letterCounts[letter]++;
//             }else{
//                 letterCounts[letter]=1
//             }
//         }
//     }
//     return letterCounts
// }
// console.log(countlettersInArray(["webbrain",  "academy"]));

// function countLettersInArray(arr) {
//     const letterCount = {};
  
//     for (const word of arr) {
//       for (const letter of word) {
//         if (letterCount[letter]) {
//           letterCount[letter]++;
//         } else {
//           letterCount[letter] = 1;
//         }
//       }
//     }
  
//     return letterCount;
//   }
  
//   const ar2 = ["webbrain", "academy"];
//   const letterCounts = countLettersInArray(ar2);
  
//   console.log(letterCounts);
  
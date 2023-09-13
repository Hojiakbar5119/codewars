//? Insert dashes

// function insertDash(num) {
//     const nums = num.toString().split("")
//     let arr = []
//     for(let i= 0 ; i<nums.length; i++){
//         console.log(nums[i]);

//         arr.push(nums[i])

//         if(nums[i]%2==0)
//     }
// }

// insertDash(233)


// console.log([]=="0");
// console.log([]==0);

// console.log([]==true);
// let i=1
// const nums

// for(,i<nums.length,i++)
// console.log(calc(2,4));

// const calc = function(a,b){
//     return a+b
// } //exspression

// console.log(typeof([""]));

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.charAt(1))


// let obj1 = {b:1}
// let obj2 = {d:3,c:4,b:4,a:5}


// let obj = Object.assign(obj1,obj2)
// console.log(obj);
// console.log(obj1);


//? Total amount of points
// function points(games) {
//     let total = 0;
//     for (const match of games) {
//         const [x, y] = match.split(':')

//         if (x > y) {
//             total = total + 3;
//         } else if (x === y) {
//             total = total + 1;
//         }

//     }
//     return total
// }
// console.log(points(["1:0","2:0","3:0","4:5","2:1","3:1","4:1","3:2","4:2","4:3"]));


//? Remove String Spaces

// function noSpace(x){
//     return x.split(' ').join('')
//   }

//   console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


//? Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// function grow(x){
//     let sum=1;
//     for(let i=0; i<x.length; i++){
//         sum *= x[i] 
//     }
//     return sum
//   }
//   grow([1, 2, 3])

//?  A Needle in the Haystack


// function findNeedle(haystack) {
//     // your code here
//     for(let i=0; i<haystack.length; i++){
//         // console.log(haystack[i],i);
//         if(haystack[i]==="needle"){
//             return `found the needle at position ${i+1}`
//         }
//         return "needle not found";
//     }

//   }
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])


// function century(year) {
//     // Finish this :)

//     century=Math.round(year/100)
//     if(year%100!=0){
//       century+=1
//     }

//     return century; 

//   }

//   console.log(century(2001));



function openOrSenior(data) {
    // ...
    for (let i of data) {
        console.log(i);
        for (let j = 0; j < i.length - 1; i++) {
            i[j]>55&&i[j+1]?console.log('Senior'):console.log('Open');
        }
    }

}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
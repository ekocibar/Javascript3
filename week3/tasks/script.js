//2
for (let i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
/* the output would be 0,1 and 2. 
If there was var instead of let, the output would be 3,3 and 3, 
because Variables declared with var do not have block scope, but let has*/


// 3
const addSix = n => n + 6;



// 4
// // //  1   // // //
const calculateSum = (a,b) => a + b;
let sum = calculateSum(2, 6);
console.log(sum);


// // //  2   // // //
let results = $.getJSON('https://jsonplaceholder.typicode.com/users');
//showResults(results);
console.log(results);


// // //  3   // // //
const calculateSum2 = (a,b) => a + b;
let summ = calculateSum2(2, 6);
if (summ > 8) {
    console.log('larger than 8');
}else console.log('not larger than 8');
//
//
//

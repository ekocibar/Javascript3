//                  ####  1  ####
//Say you would like to write a program that doubles the odd numbers 
//in an array and throws away the even number.
//write the  program using map and filter, don't forget to use =>

function doubledOddNumbers(arr){    
    let newNumbers = arr.filter((a) => a%2 == 1).map((a) => 2*a);   // filter odds // then double each 
    return console.log("The doubled numbers are ", newNumbers);    
}
doubledOddNumbers([1,2,3,4,5,6])


//                  ####  2  ####
//Use the array of the previous assignment, write a program that add the even 
//numbers to the resulting array twice, but the odd numbers only once. Don't forget to use =>.

function twiceEvenNumbers(arr){    
    let evenNumbers = arr.filter((a) => a%2 == 0);  // filter evens
    let concatArr = arr.concat(evenNumbers);        // concat both arrays
	let newNumbers = concatArr.sort((a,b) => a-b);  // sort values in the array
    return console.log("The new numbers are ", newNumbers);    
}
twiceEvenNumbers([1,2,3,4,5,6,7,8,9,10])


//                  ####  3  ####
//Convert the task durations to hours, instead of minutes.
//Filter out everything that took two hours or more.
//Sum it all up.
//Multiply the result by a per-hour rate for billing 
//(you can decide yourself what Maartje should make per hour).
//Output a formatted Euro amount.
//Don't forget to use =>
function funcMaartje(){
    let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
    let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
     
    let tasks = [monday, tuesday];
    console.log(tasks);
    //Convert mins into hours
    let convertedDurations = tasks.map((arr) => arr.map((obj) =>  {         // map each array in the array
                                                var newObj = {};            // declare obj 
                                                newObj.name= obj.name ;     // set name prop of each unchanged
                                                newObj.duration = obj.duration/60;  // set new duration of each
                                                return newObj;
                                                } ));
    console.log(convertedDurations);
    
    let concatArr = convertedDurations[0].concat(convertedDurations[1]);    // concat monday and tuesday arrays.
    let amount = concatArr.map((a) => a.duration).filter((a) => a>=2).reduce((a,b) => (a+b))*1000; // change each value to duration only  // filter above 2  // add all values  // multiply by Maartjes rate per hour 
    let formattedAmount = amount.toLocaleString("es-ES", {minimumFractionDigits: 2}); // format into Euro amout
    console.log('\u20AC' + formattedAmount )    // '\u20AC' is euro sign
    
    
}
funcMaartje();
/**************************Return Odd Array************************/
/******************************************************************/

//define array
let numArr = [11,27,38,4,2,55,94,115];
console.log(numArr); //outputs the array above

/* function to take this array and return an array 
of the odd numbers only */
let oddFunc = (arr) => {
    let oddArr = arr.filter(function(arr) {return (arr & 1) === 1;}); //filters out even and returns odd numbers
    
    return oddArr; //array of odd numbers
}

// pass the number array to the function and print oddArr
console.log(oddFunc(numArr));
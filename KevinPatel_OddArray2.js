//declare numbers array
let arr = [11,27,38,4,2,55,94,115, 7];

let oddFunc = (oddArr, i) => {
    
    //check if the number is odd, add it to oddArr if it is
    if(arr[i] % 2 === 1) {
        oddArr.push(arr[i]);
    }
    
    //increment i and pass it back into the function
    if (i < arr.length) {
        i++;
        oddFunc(oddArr, i);
    }
};

let oddArr = []; // will hold odd numbers
let i = 0; //will increment

oddFunc(oddArr, i); // filter out the odd numebrs
console.log(oddArr); // the oddArr with the odd numbers
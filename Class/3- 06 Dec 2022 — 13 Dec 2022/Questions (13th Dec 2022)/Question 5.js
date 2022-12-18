// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
function sumOfTwo(a, b){
    let ans = a+b;
    if (a == b){
        ans *= 3;
    }
    return ans;
}
console.log("The sum for (5, 7) = " + sumOfTwo(5, 7));
console.log("The sum for (8, 8) = " + sumOfTwo(8, 8));
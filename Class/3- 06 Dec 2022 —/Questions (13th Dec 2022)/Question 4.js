// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function areaOfTriangle(a, b, c){
    let s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
console.log("Area of triangle with: a = 5, b = 6, c = 7 is: " + areaOfTriangle(5, 6, 7));
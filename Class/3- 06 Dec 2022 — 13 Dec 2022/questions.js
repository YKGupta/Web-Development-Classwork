// Question 1
// function tellDay(v)
// {
//     switch(v)
//     {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Enter between 1-7");
//     }
// }
// tellDay(6)

// Question 2
// v = 1*2*-4;
// if(v > 0){
//     console.log("Positive");
// }
// else if(v == 0){
//     console.log("Zero")
// }
// else{
//     console.log("Negative")
// }

// Question 3
// a = 1
// b = -99
// c = -2
// if (a < b && b < c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// else if(b < a && a < c){
//     console.log(b)
//     console.log(a)
//     console.log(c)
// }
// else if(c < a && a < b){
//     console.log(c)
//     console.log(a)
//     console.log(b)
// }
// else if(c < b && b < a){
//     console.log(c)
//     console.log(b)
//     console.log(a)
// }
// else if(a < c && c < b){
//     console.log(a)
//     console.log(c)
//     console.log(b)
// }
// else{
//     console.log(b)
//     console.log(c)
//     console.log(a)
// }

// Question 4
// l = [80, 77, 88, 95, 68]
// function getAvg(l){
//     let s = 0;
//     for(let i = 0; i < l.length; i++){
//         s += l[i];
//     }
//     return s/l.length;
// }
// avg = getAvg(l)
// if(avg < 60){
//     console.log(avg + " : F")
// }
// else if(avg >= 60 && avg <= 70){
//     console.log(avg + " : D")
// }
// else if(avg >= 70 && avg <= 80){
//     console.log(avg + " : C")
// }
// else if(avg >= 80 && avg <= 90){
//     console.log(avg + " : B")
// }
// else{
//     console.log(avg + " : A")
// }

// Question 5
for (let i = 0; i <= 100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz")
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(i)
    }
}
// Question 1
function sum(a, b){
    return a+b;
}
console.log(sum(5, 7))

// Question 2
function fac(n){
    let f = 1;
    for (let i = 1; i <= n; i++)
    {
        f *= i;
    }
    return f;
}
console.log(fac(5))

// Question 3
function table(n){
    for(let i = 1; i <= 10; i++)
    {
        console.log(n + " * " + i + " = " + (n*i));
    }
}
table(9)
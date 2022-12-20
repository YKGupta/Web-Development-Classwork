var q = document.getElementById("Hey");
q.innerHTML = "Hey";
var q = document.getElementById("my");
q.innerHTML = "my";
var q = document.getElementById("n");
q.innerHTML = "name";
var q = document.getElementById("is");
q.innerHTML = "is";
var q = document.getElementById("and");
q.innerHTML = "and";
var q = document.getElementById("my2");
q.innerHTML = "my";
var q = document.getElementById("a");
q.innerHTML = "age";
var q = document.getElementById("is2");
q.innerHTML = "is";
var q = document.getElementById("I");
q.innerHTML = "I";
var q = document.getElementById("love");
q.innerHTML = "love";

const n = prompt("Enter your name:");
const nameElement = document.getElementById("name");
nameElement.innerHTML = "<em>" + n + "</em>";

const age = prompt("Enter your age:");
const ageElement = document.getElementById("age");
ageElement.innerHTML = "<em>" + age + "</em>";

const sub = prompt("Enter your favourite subject:")
const subElement = document.getElementById("sub");
subElement.innerHTML = "<em>" + sub + "</em>";

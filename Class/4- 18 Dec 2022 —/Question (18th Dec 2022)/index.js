const n = prompt("Enter your name:");
const nameElement = document.getElementById("name");
nameElement.innerHTML = "<em>" + n + "</em>";

const age = prompt("Enter your age:");
const ageElement = document.getElementById("age");
ageElement.innerHTML = "<em>" + age + "</em>";

const sub = prompt("Enter your favourite subject:")
const subElement = document.getElementById("sub");
subElement.innerHTML = "<em>" + sub + "</em>";

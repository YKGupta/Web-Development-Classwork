const nameTag = document.getElementById("name");
const ageTag = document.getElementById("age");
const genderTag = document.getElementById("gender");

function ShowDetails()
{
    nameTag.innerHTML = prompt("Enter your name");
    ageTag.innerHTML = prompt("Enter your age")
    genderTag.innerHTML = prompt("Enter your gender")
}

function HideDetails()
{
    nameTag.innerHTML = "";
    ageTag.innerHTML = "";
    genderTag.innerHTML = "";
}
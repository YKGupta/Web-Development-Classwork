const button = document.getElementById("changeBgButton")
const input = document.getElementById("changeInputfieldColour")
const div = document.getElementById("changeDivColour")

button.addEventListener("click", onButtonClick);
input.addEventListener("keyup", getKeyDown);
div.addEventListener("mouseover", mouseEnter);
div.addEventListener("mouseout", mouseOut);

let i = 0;

function onButtonClick()
{
    if(i % 3 == 0)
        document.body.style.backgroundColor = "red";
    else if(i % 3 == 1)
        document.body.style.backgroundColor = "green";
    else
        document.body.style.backgroundColor = "white";
    i++;
}

let j = true;

function getKeyDown()
{
    if(j)
        input.style.backgroundColor = "purple";
    else
        input.style.backgroundColor = "black";
    j = !j;
}

function mouseEnter()
{
    div.style.backgroundColor = "gray";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.marginTop = "20px";
    div.style.height = "220px";
}

function mouseOut()
{
    div.style.backgroundColor = "white";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "flex-start";
    div.style.marginTop = "20px";
    div.style.height = "220px";
}
const ob = {
    class: 12,
    section: "A",
    students: ["Yash", "Aditya", "Aryaman"],
    teachers: {
        math: {
            name: "ABC",
            id: 1234132
        },
        science: {
            name: "DEF",
            id: 1234567
        }
    },
    noOfStudents: 40
}
console.log("Class: " + ob.class + " Section: " + ob["section"] + " has " + ob.noOfStudents + " students.\n")
console.log("\n\nObject\n")
for (let i in ob){
    console.log(ob[i])
}

console.log("\n\nStudents\n")
for (let i = 0; i < ob["students"].length; i++){
    console.log(ob.students[i])
}

ob.students.push("Dev")

console.log("\n\nStudents\n")
for (let i = 0; i < ob["students"].length; i++){
    console.log(ob.students[i])
}

ob.noOfStars = 10

console.log("\n\nThe class has: " + ob["noOfStars"] + " no of stars.\n\n")

delete ob.noOfStudents

console.log("\n\nObject\n")
for (let i in ob){
    console.log(ob[i])
}

console.log("\n\nTeachers\n")
for (let i in ob.teachers){
    console.log(ob.teachers[i].name)
}

ob.teachers.computer = {
    name: "GHI",
    id: 1343211
}

console.log("\n\nTeachers\n")
for (let i in ob.teachers){
    console.log(ob.teachers[i].name)
}

delete ob.teachers.computer

console.log("\n\nTeachers\n")
for (let i in ob.teachers){
    console.log(ob.teachers[i].name)
}

ob.teachers.science.name = "XYZ"

console.log("\n\nTeachers\n")
for (let i in ob.teachers){
    console.log(ob.teachers[i].name)
}
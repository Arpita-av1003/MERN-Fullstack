const students = ["Arpita", "Appu", "Mona", "Ruhanika", "Anni"];

function displayNames(Studentlist) {
    console.log("Student Name:--");
    Studentlist.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });
}

function searchForStudent(studentArray, nameToFind) {

    const isFound = studentArray.includes(nameToFind);

    if (isFound) {
        console.log(`Result: Yes, ${nameToFind} is found.`);
    } else {
        console.log(`Result: No, ${nameToFind} is not found.`);
    }
}

displayNames(students);
searchForStudent(students, "Appu"); 
searchForStudent(students, "Ruhi");  
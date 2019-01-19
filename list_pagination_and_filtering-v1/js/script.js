/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const parent = document.getElementsByClassName('page')[0];
const students = document.getElementsByClassName('student-item');

// Function that establishes an array of arrays for student information. Each Child array has ten or less elements attacted to them.
function arrayOfArrays(students) {
    const tens = Math.ceil(students.length / 10);
    let parentArray = [];
    let bottom = 0;
    for (let i = 1; i <= tens; i++) {
        const top = i * 10;
        let childArray = [];
        for (let j = bottom; j < top; j++) {
            if (j < students.length) {
                childArray.push(students[j]);
            }
        }
        bottom = bottom + 10;
        parentArray.push(childArray);
    }
    return(parentArray);
}

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

// Function that calls and displays a specified amount of students to the page.
function showPage(list) {
    // Removes student filter.
    for (let i = 0; i < students.length; i++) {
        students[i].style.display = '';
    }
    // Hides student information as needed.
    for (let i = 0; i < students.length; i++) {
        if (!list.includes(students[i])) {
            students[i].style.display = 'none';
        }
    }
}

// Function that loads page links and establishes a click event listener for each link.
function appendPageLinks(array) {
    const num = array.length;
    // Removes the current div element, if one exists.
    const oldDiv = document.getElementsByClassName('pagination')[0];
    if (oldDiv) {
        parent.removeChild(oldDiv);
    }
    // Establishes new elements as needed.
    const div = document.createElement('div');
    div.className = 'pagination';
    const ul = document.createElement('ul');
    div.appendChild(ul);
    parent.appendChild(div);
    for (let i = 0; i < num; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = (i + 1);
        li.appendChild(a);
        ul.appendChild(li);
    }
    ul.children[0].children[0].className = 'active';
    // Assigns an event listener for each loaded link.
    for (let i = 0; i < ul.children.length; i++) {
        const a = ul.children[i].children[0];
        a.addEventListener('click', () => {
            // Shifts active class to the clicked link.
            const old = document.getElementsByClassName('active')[0];
            old.className = '';
            a.className = 'active';
            // Displays new results from the clicked link to the page.
            showPage(array[i]);
        })
    }
    return(ul);
}

// Wrapper object used to execute functions as needed.
function exec(list) {
    const array = arrayOfArrays(list);
    showPage(array[0]);
    appendPageLinks(array);
}

// Function that loads and displays a search box to the page.
function createSearchBox() {
    const header = document.getElementsByClassName('page-header')[0];
    const searchDiv = document.createElement('div');
    searchDiv.className = 'student-search';
    const input = document.createElement('input');
    input.placeholder = 'Search for a student...';
    searchDiv.appendChild(input);
    const button = document.createElement('button');
    button.textContent = 'Search';
    searchDiv.appendChild(button);
    header.appendChild(searchDiv);
    return(searchDiv);
}

// Function that adds a not found message and hides all elements if no matches are found in search results.
function notFound() {
    clearNotFound();
    const sibling = document.getElementsByClassName('student-list')[0];
    const message = document.createElement('h3');
    message.id = 'not-found';
    message.textContent = 'No student matches found';
    parent.insertBefore(message, sibling);
    for (let i = 0; i < students.length; i++) {
        students[i].style.display = 'none';
    }
    const paginationDiv = document.getElementsByClassName('pagination')[0];
    if (paginationDiv) {
        parent.removeChild(paginationDiv);
    }
}

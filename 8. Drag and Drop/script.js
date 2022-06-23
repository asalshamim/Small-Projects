const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bozos',
    'Bill Gates',
    'Bernard Arnault',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Emma Bloomberg',
    'Melanie Craft',
    'Steve Ballmer',
    'Sergey Brin'

];

// Store listitems


const listItems = [];
let dragStartIndex;

createList();

const number = [1, 3, 110, 40, 302];
console.log(number.sort(function (a, b) {
    return a - b;
}));

// Insert List Items into Dom

function createList() {
    [...richestPeople]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
           // console.log(person);
            const listItem = document.createElement('li');

           // listItem.classList.add('over');
            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable ="true">
            <p class= "person-name">${person}</p>
            <i class ="fas fa-grip-lines"></i>
            </div>
            `;
            listItems.push(listItem);
            draggable_list.appendChild(listItem);
    });
}
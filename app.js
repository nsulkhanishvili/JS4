// დავალება:
// Task 1:
// გაქვთ ობიექტების მასივი. ობიექტს აქვს ორი ფროფერთი, იუზერნეიმი და ასაკი.
// ჯავასკრიპტიდან უნდა შექმნათ სია html მხარეს (ul -> li), რომელშიც ჩაემატება 
// მხოლოდ ის იუზერნეიმები ობიექტებიდან, რომლის ასაკიც მეტია 18 ზე.

const myDiv = document.querySelector('#main');
const ul = document.createElement('ul');
myDiv.appendChild(ul);

const arrPerson = [{
        userName: 'user1',
        age: 17
    },
    {
        userName: 'user2',
        age: 18
    },
    {
        userName: 'user3',
        age: 20
    },
    {
        userName: 'user4',
        age: 15
    },
    {
        userName: 'user5',
        age: 22
    },
];

const newPerson = arrPerson.filter((person) => {
    if (person.age >= 18) {
        return person.userName
    }

}).forEach(person => {
    const li = document.createElement('li');
    li.textContent = person.userName;
    ul.appendChild(li);

});
console.log(newPerson);


// Task 2:
// მოიძიეთ ინფორმაცია onclick  ზე.
// html - ის მხარეს განათავსეთ ორი ღილაკი, ერთი წაშლის პირველ დავალებაში შესრულებულ სიას,
//  ხოლო მეორე შექმნის. თუ სია უკვე არსებობს, მაშინ შექმნის ღილაკი ან დამალული იყოს, ან დადიზეიბლებული.
// იგივე წაშლის შემთხვევაშიც(თუ სია წაშლილია, მაშინ ან დამალული, ან დადიზეიბლებული)

const btnAdd = document.querySelector('#add');
const btnRemove = document.querySelector('#remove');

function add() {
    const ul = document.querySelector('ul');
    if (!ul) {
        initData();
        btnAdd.disabled = true;
        btnRemove.disabled = false;
    }
}

function remove() {
    const ul = document.querySelector('ul');
    if (ul) {
        ul.remove();
        btnAdd.disabled = false;
        btnRemove.disabled = true;
    }
}

function initData() {
    const myDiv = document.querySelector('#main');
    const ul = document.createElement('ul');
    myDiv.appendChild(ul);
    arrPerson.forEach(item => {
        if (item.age >= 18) {
            const li = document.createElement('li');
            li.textContent = item.userName;
            ul.appendChild(li);
        }
    })
}

// Task 3
// მოიძიეთ ინფორმაცია classlist ზე.
// css ში შექმენით მარტივი კლასი.(მაგალითად ფერი და ფონტსაიზი მიანიჭეთ)

function myFunc() {

    text.classList.toggle("mystyle")
}
  

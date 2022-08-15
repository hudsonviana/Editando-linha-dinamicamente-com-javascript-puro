const books = [
    {
        id: 1,
        name: 'Book 1'
    },
    {
        id: 2,
        name: 'Book 2'
    },
    {
        id: 3,
        name: 'Book 3'
    },
    {
        id: 4,
        name: 'Book 4'
    },
];

const booksElement = document.querySelector('#books');

function render () {
    let bookHTML = '<ul>';
    books.forEach((book, index) => {
        bookHTML += `
            <li id="list_li${book.id}">
                <span id="name${book.id}">${book.name}</span>
                <button id="btn_add_to_cart" data-id="${book.id}">Add to Cart</button>
                <button id="btn_remove_element" data-id="${book.id}">Remove</button>
                <button id="btn_edit_element" data-id="${book.id}">Edit</button>
            </li>
            <li id="edit_li${book.id}" class="hide">
                <input type="text" id="input${book.id}" value="${book.name}" />
                <button id="btn_back" data-id="${book.id}">Back</button>
                <button id="btn_save" data-id="${book.id}">Save</button>
            </li>
        `;
    });
    bookHTML += '</ul>'

    booksElement.innerHTML = bookHTML;
}

render();

const btnsAddToCart = document.querySelectorAll('#btn_add_to_cart');

btnsAddToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.getAttribute('data-id'));
    });
});

const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');

btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        // console.log(this.closest('li'));
        this.closest('li').remove(); // esse comando só funciona com uma function normal, ou seja, não funciona com arrow function
    });
});

const toggleHideLi = (elements) => {
    elements.forEach((e) => {
        document.querySelector(e).classList.toggle('hide');
    });
}

const btnsEditElement = document.querySelectorAll('#btn_edit_element');

btnsEditElement.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');

        toggleHideLi(['#edit_li'+id, '#list_li'+id]);

    });
});

const btnsBack = document.querySelectorAll('#btn_back');

btnsBack.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        
        const inputEditValue = document.querySelector('#input' + id);
        const nameEditValue = document.querySelector('#name' + id);

        nameEditValue.innerHTML = inputEditValue.value;

        toggleHideLi(['#edit_li'+id, '#list_li'+id]);
        
    });
});

const btnsSave = document.querySelectorAll('#btn_save');

btnsSave.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id'); 
        console.log('save ' + id);
    });
});

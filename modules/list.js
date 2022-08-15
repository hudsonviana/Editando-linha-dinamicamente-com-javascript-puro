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

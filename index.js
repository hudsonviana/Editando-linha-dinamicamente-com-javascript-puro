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
    books.forEach((objeto, index) => {
        bookHTML += `
            <li>${objeto.name}
                <button id="btnAddToCart" data-id="${objeto.id}">Add to Cart</button>
                <button id="removeElement" data-id="${objeto.id}">Remove</button>
            </li>
        `;
    });
    bookHTML += '</ul>'

    booksElement.innerHTML = bookHTML;
}

render();

const btnsAddToCart = document.querySelectorAll('#btnAddToCart');

btnsAddToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.getAttribute('data-id'));
    });
});

const btnsRemoveElement = document.querySelectorAll('#removeElement');

btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        // console.log(this.closest('li'));
        this.closest('li').remove();
    });
});

/*
btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const idBtn = btn.getAttribute('data-id');
        const index = books.findIndex((book) => {
            return book.id === Number(idBtn); // retorna o índice do array Books
        });

        books.splice(index, 1);
        render();
        // console.log('ID', btn.getAttribute('data-id'), 'removido!');
        console.log(index);
    });
});
*/
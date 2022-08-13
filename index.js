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
            <li>${objeto.name} <button id="btnAddToCart" data-id="${objeto.id}">Add to Cart</button></li>
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
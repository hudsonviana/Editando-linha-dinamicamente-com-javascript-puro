import getUsers from './users';

const usersElement = document.querySelector('#users');

async function render () {

    try {
        let userHTML = '<ul>';
        const users = await getUsers();
        users.forEach((user, index) => {
            userHTML += `
                <li id="list_li${user.id}">
                    <span id="name${user.id}">${user.name}</span>
                    <button class="btn btn-warning btn-sm" id="btn_add_to_cart" data-id="${user.id}"><i class="bi bi-cart-check-fill"></i> Add to Cart</button>
                    <button class="btn btn-danger btn-sm" id="btn_remove_element" data-id="${user.id}"><i class="bi bi-trash3-fill"></i> Remove</button>
                    <button class="btn btn-success btn-sm" id="btn_edit_element" data-id="${user.id}"><i class="bi bi-pencil-square"></i> Edit</button>
                </li>
                <li id="edit_li${user.id}" class="hide">
                    <input type="text" id="input${user.id}" value="${user.name}" />
                    <button class="btn btn-info btn-sm" id="btn_back" data-id="${user.id}">Back</button>
                    <button class="btn btn-success btn-sm" id="btn_save" data-id="${user.id}">Save</button>
                </li>
                <span id="message${user.id}"></span>
            `;
        });
        userHTML += '</ul>'

        const event = new CustomEvent('loaded');
        usersElement.innerHTML = userHTML;
        usersElement.dispatchEvent(event);
    }catch(error) {
        console.log(error);
    }
}

render();

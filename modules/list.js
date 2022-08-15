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
                    <button id="btn_add_to_cart" data-id="${user.id}">Add to Cart</button>
                    <button id="btn_remove_element" data-id="${user.id}">Remove</button>
                    <button id="btn_edit_element" data-id="${user.id}">Edit</button>
                </li>
                <li id="edit_li${user.id}" class="hide">
                    <input type="text" id="input${user.id}" value="${user.name}" />
                    <button id="btn_back" data-id="${user.id}">Back</button>
                    <button id="btn_save" data-id="${user.id}">Save</button>
                </li>
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

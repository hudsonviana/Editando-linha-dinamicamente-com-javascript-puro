import toggleHideClass from "./hide";

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsBack = document.querySelectorAll('#btn_back');
    btnsBack.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const inputEditValue = document.querySelector('#input' + id);
            const nameEditValue = document.querySelector('#name' + id);
            // nameEditValue.innerHTML = inputEditValue.value;
            inputEditValue.value = nameEditValue.innerHTML;
            toggleHideClass(['#edit_li'+id, '#list_li'+id]);
        });
    });
});

import toggleHideClass from "./hide";

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsEditElement = document.querySelectorAll('#btn_edit_element');
    btnsEditElement.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            toggleHideClass(['#edit_li'+id, '#list_li'+id]);
        });
    });
});

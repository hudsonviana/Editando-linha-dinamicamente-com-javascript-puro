import toggleHideClass from "./hide";

const btnsBack = document.querySelectorAll('#btn_back');

btnsBack.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        
        const inputEditValue = document.querySelector('#input' + id);
        const nameEditValue = document.querySelector('#name' + id);

        nameEditValue.innerHTML = inputEditValue.value;

        toggleHideClass(['#edit_li'+id, '#list_li'+id]);
        
    });
});

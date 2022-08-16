import http from '../http';
import toggleHideClass from './hide';

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsSave = document.querySelectorAll('#btn_save');
    btnsSave.forEach((btn) => {
        btn.addEventListener('click', async () => {
            try {
                const id = btn.getAttribute('data-id');
                const inputName = document.querySelector('#input'+id);
                const messageUpdated = document.querySelector('#message'+id);
                const { data } = await http.post('/user/update', {
                    id,
                    name: inputName.value
                });

                if (data === 'updated') {
                    const inputEditValue = document.querySelector('#input' + id);
                    const nameEditValue = document.querySelector('#name' + id);
                    nameEditValue.innerHTML = inputEditValue.value;
                    toggleHideClass(['#edit_li'+id, '#list_li'+id]);
                    messageUpdated.textContent = 'Atualizado com sucesso!';
                    setTimeout(() => {
                        messageUpdated.textContent = '';
                    }, 3000);
                }

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        });
    });
});

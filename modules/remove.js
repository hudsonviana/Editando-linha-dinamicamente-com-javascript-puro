import http from '../http';

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');
    btnsRemoveElement.forEach((btn) => {
        btn.addEventListener('click', async function (event) {
            try {
                const id = btn.getAttribute('data-id');
                const { data } = await http.delete('/user/destroy', {data:{id}});
                
                if (data === 'deleted') {
                    const messageUpdated = document.querySelector('#message'+id);
                    messageUpdated.textContent = 'Deletado com sucesso!';
                    setTimeout(() => {
                        this.closest('li').remove(); // esse comando só funciona com uma function normal, ou seja, não funciona com arrow function
                        messageUpdated.textContent = '';
                    }, 3000);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });
});

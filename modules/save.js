const btnsSave = document.querySelectorAll('#btn_save');

btnsSave.forEach((btn) => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id'); 
        console.log('save ' + id);
    });
});

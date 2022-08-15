const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');

btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', function (event) {
        // console.log(this.closest('li'));
        this.closest('li').remove(); // esse comando só funciona com uma function normal, ou seja, não funciona com arrow function
    });
});

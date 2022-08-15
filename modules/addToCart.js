const btnsAddToCart = document.querySelectorAll('#btn_add_to_cart');

btnsAddToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.getAttribute('data-id'));
    });
});

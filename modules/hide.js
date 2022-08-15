const toggleHideClass = (elements) => {
    elements.forEach((e) => {
        document.querySelector(e).classList.toggle('hide');
    });
}

export default toggleHideClass;

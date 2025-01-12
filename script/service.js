
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const box = this.closest('.box');
        if (box.classList.contains('expanded')) {
            box.classList.remove('expanded');
            this.textContent = 'View';
        } else {
            box.classList.add('expanded');
            this.textContent = 'Hide';
        }
    });
});

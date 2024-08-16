document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const changeBackgroundButton = document.getElementById('change-background');

    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const products = event.target.nextElementSibling;
            products.classList.toggle('hidden');
        });
    });

    changeBackgroundButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const colors = ['#ff80ab', '#69f0ae', '#ffd740', '#b388ff', '#ff8a80'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

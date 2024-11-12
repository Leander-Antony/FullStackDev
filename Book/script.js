let turnButton = document.getElementById('turnPageBtn');
let book = document.querySelector('.book');

turnButton.addEventListener('click', () => {
    // Add or remove a class that triggers the page turn
    book.classList.toggle('turn');
});

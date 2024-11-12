let book = document.querySelector('.book');

// Trigger the page turn on hover
book.addEventListener('mouseenter', () => {
    book.classList.add('turn');
});

// Reset the page back when mouse leaves
book.addEventListener('mouseleave', () => {
    book.classList.remove('turn');
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const sections = document.querySelectorAll('.section');
    const navbar = document.getElementById('navbar'); // Added navbar reference

    window.onscroll = function() {
        scrollFunction();
        revealSections();
        hideNavbar(); // Call hideNavbar function on scroll
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
                section.classList.remove('visible');
            }
        });
    }

    // Function to hide navbar after the package section appears
    function hideNavbar() {
        const packageSection = document.getElementById('package');

        // Check if package section is visible
        if (packageSection && packageSection.classList.contains('visible')) {
            navbar.style.display = 'none'; // Hide the navbar
        } else {
            navbar.style.display = 'block'; // Show the navbar
        }
    }

    // Mouse movement effect on register button
    const btnRegister = document.querySelector('.btn-register');
    if (btnRegister) {
        btnRegister.addEventListener('mousemove', (e) => {
            const x = e.clientX - btnRegister.getBoundingClientRect().left;
            const y = e.clientY - btnRegister.getBoundingClientRect().top;
            
            btnRegister.style.setProperty('--x', `${x}px`);
            btnRegister.style.setProperty('--y', `${y}px`);
        });
    }

    // Trainer carousel functionality (assumed to be part of your existing script)
    const trainersContainer = document.querySelector('.trainers-container');
    const trainers = document.querySelector('.trainers');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const trainerCards = document.querySelectorAll('.trainer-card');
    const cardWidth = 320; // Adjust card width including margin
    const numVisibleCards = 3;
    const totalCards = trainerCards.length;
    let currentScroll = 0;
    let visibleCards = numVisibleCards;

    function updateVisibility() {
        trainerCards.forEach((card, index) => {
            if (index < visibleCards) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function updateButtons() {
        if (visibleCards <= numVisibleCards) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if (visibleCards >= totalCards) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }

    function scrollLeft() {
        if (visibleCards > numVisibleCards) {
            visibleCards--;
            currentScroll = Math.max(currentScroll - cardWidth, 0);
            trainers.style.transform = `translateX(-${currentScroll}px)`;
            updateVisibility();
            updateButtons();
        }
    }

    function scrollRight() {
        if (visibleCards < totalCards) {
            visibleCards++;
            currentScroll = Math.min(currentScroll + cardWidth, (totalCards - numVisibleCards) * cardWidth);
            trainers.style.transform = `translateX(-${currentScroll}px)`;
            updateVisibility();
            updateButtons();
        }
    }

    prevBtn.addEventListener('click', scrollLeft);
    nextBtn.addEventListener('click', scrollRight);

    updateVisibility();
    updateButtons();
});

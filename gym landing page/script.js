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



document.addEventListener('DOMContentLoaded', function() {
    const gearsContainer = document.querySelector('.gears-container');
    const gearItems = document.querySelectorAll('.gear-item');

    gearItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered'); // Add class to bring item to top
            setTimeout(() => {
                gearsContainer.appendChild(item); // Move hovered item to the end of container after a short delay
            }, 300); // Adjust delay time as needed
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered'); // Remove class on mouse leave
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const gearsContainer = document.querySelector('.gears-container');
    const gearItems = document.querySelectorAll('.gear-item');

    gearItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Toggle 'hovered' class on click for mobile devices
            item.classList.toggle('hovered');
        });
    });
});


function scrollTrainers(direction) {
    const trainersContainer = document.querySelector('.trainers-container');
    const scrollAmount = trainersContainer.clientWidth; // Amount to scroll

    trainersContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}



// JavaScript for Popup and Quantity Calculation
const buyNowButtons = document.querySelectorAll('.btn-buy-now');
const popup = document.getElementById('popup');
const popupProductImg = document.querySelector('.popup-product-img');
const popupProductTitle = document.querySelector('.popup-product-title');
const popupProductDescription = document.querySelector('.popup-product-description');
const popupProductPrice = document.querySelector('.popup-product-price');
const popupQuantityInput = document.getElementById('popup-quantity');
const popupTotalAmount = document.getElementById('popup-total');
const paymentForm = document.querySelector('#popup form');
const maintenancePopup = document.getElementById('maintenancePopup');

// Event listener for Buy Now buttons
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.supplement-card');
        const productImgSrc = productCard.querySelector('.supplement-img').src;
        const productTitle = productCard.querySelector('h3').textContent;
        const productDescription = productCard.querySelector('p').textContent;
        const productPrice = parseFloat(productCard.querySelector('.supplement-price').textContent.replace('₹', '').trim());

        // Update popup content with selected product details
        popupProductImg.src = productImgSrc;
        popupProductTitle.textContent = productTitle;
        popupProductDescription.textContent = productDescription;
        popupProductPrice.textContent = `₹ ${productPrice.toFixed(2)}`;

        // Reset quantity input to 1
        popupQuantityInput.value = 1;

        // Update total amount initially
        updateTotalAmount(productPrice);

        // Display the popup
        popup.style.display = 'flex';
    });
});

// Event listener for quantity input
popupQuantityInput.addEventListener('input', () => {
    const productPrice = parseFloat(popupProductPrice.textContent.replace('₹', '').trim());
    updateTotalAmount(productPrice);
});

// Event listener for payment form submission
paymentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demo

    // Close payment popup
    closePopup();

    // Simulate processing delay (for demo purposes)
    setTimeout(() => {
        // Show maintenance popup
        showMaintenancePopup();
    }, 1000); // Adjust delay time if needed
});

// Function to update total amount based on quantity
function updateTotalAmount(productPrice) {
    const quantity = parseInt(popupQuantityInput.value);
    const totalAmount = productPrice * quantity;
    popupTotalAmount.textContent = ` ${totalAmount.toFixed(2)}`;
}

// Close payment popup function
function closePopup() {
    popup.style.display = 'none';
}

// Show maintenance popup function
function showMaintenancePopup() {
    maintenancePopup.style.display = 'flex';
}

// Close maintenance popup function
function closeMaintenancePopup() {
    maintenancePopup.style.display = 'none';
}










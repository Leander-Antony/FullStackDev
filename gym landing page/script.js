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

    // Mouse movement effect on register button
    const btnRegister = document.querySelector('.btn-register');
    if (btnRegister) {
        btnRegister.addEventListener('mousemove', (e) => {
            const x = e.clientX - btnRegister.getBoundingClientRect().left;
            const y = e.clientY - btnRegister.getBoundingClientRect().top;
            
            btnRegister.style.setProperty('--x', `₹{x}px`);
            btnRegister.style.setProperty('--y', `₹{y}px`);
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
    popupTotalAmount.textContent = `₹ ${totalAmount.toFixed(2)}`;
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


function updateTrainerImage() {
    var trainerSelect = document.getElementById("registration-trainer");
    var selectedTrainer = trainerSelect.value;

    // Hide all trainer images
    var trainerImages = document.querySelectorAll(".trainer-image");
    trainerImages.forEach(function(img) {
        img.style.display = "none";
    });

    // Show the selected trainer's image
    var selectedImage = document.getElementById("img-" + selectedTrainer);
    if (selectedImage) {
        selectedImage.style.display = "block";
    }
}

// Function to calculate total amount based on selections
function calculateTotal() {
    var packageSelect = document.getElementById("registration-package");
    var packageCost = {
        "Basic": 1000,
        "Standard": 1500,
        "Premium": 2000,
        "VIP": 2500
    };

    var selectedPackage = packageSelect.value;
    var totalAmount = packageCost[selectedPackage] || 0;

    // Additional costs for offers and supplements
    var offer1 = document.getElementById("offer1").checked;
    var offer2 = document.getElementById("offer2").checked;
    var supplement1 = document.getElementById("supplement1").checked;
    var supplement2 = document.getElementById("supplement2").checked;
    var supplement3 = document.getElementById("supplement3").checked;

    var offerCost = 0;
    var supplementCost = 0;

    if (offer1) offerCost += 999;
    if (offer2) offerCost += 1999;

    if (supplement1) supplementCost += 2499;
    if (supplement2) supplementCost += 5999;
    if (supplement3) supplementCost += 3499;

    totalAmount += offerCost + supplementCost;

    document.getElementById("totalAmount").innerText = "₹" + totalAmount;
}

// Function to validate form before submission
function validateForm() {
    var name = document.getElementById("registration-name").value.trim();
    var phone = document.getElementById("registration-phone").value.trim();
    var package = document.getElementById("registration-package").value;
    var trainer = document.getElementById("registration-trainer").value;
    var timing = document.querySelector('input[name="timing"]:checked');
    var offer1 = document.getElementById("offer1").checked || document.getElementById("offer2").checked;
    var supplement1 = document.getElementById("supplement1").checked || document.getElementById("supplement2").checked || document.getElementById("supplement3").checked;

    if (name === "" || phone === "" || package === "" || trainer === "" || !timing ) {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}

// Function to open registration popup
function openRegistrationPopup() {
    document.getElementById("registrationPopup").style.display = "block";
}

// Function to close registration popup
function closeRegistrationPopup() {
    document.getElementById("registrationPopup").style.display = "none";
}

// Function to submit form and show confirmation popup
function submitForm() {
    if (validateForm()) {
        closeRegistrationPopup();
        document.getElementById("confirmationPopup").style.display = "flex";
    }
}

// Function to close confirmation popup
function closeConfirmationPopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}

// Event listeners for form elements to recalculate total amount
document.getElementById("registration-package").addEventListener("change", calculateTotal);
document.getElementById("registration-trainer").addEventListener("change", updateTrainerImage);
document.getElementById("registration-trainer").addEventListener("change", calculateTotal);
document.getElementById("offer1").addEventListener("change", calculateTotal);
document.getElementById("offer2").addEventListener("change", calculateTotal);
document.getElementById("supplement1").addEventListener("change", calculateTotal);
document.getElementById("supplement2").addEventListener("change", calculateTotal);
document.getElementById("supplement3").addEventListener("change", calculateTotal);

// Function to validate form before submission
function validateForm() {
    var name = document.getElementById("registration-name").value.trim();
    var phone = document.getElementById("registration-phone").value.trim();
    var package = document.getElementById("registration-package").value;
    var trainer = document.getElementById("registration-trainer").value;
    var timing = document.querySelector('input[name="timing"]:checked');

    var isValid = true;

    // Clear previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("phone-error").innerText = "";
    document.getElementById("package-error").innerText = "";
    
    document.getElementById("timing-error").innerText = "";

    // Validate name
    if (name === "") {
        document.getElementById("name-error").innerText = "Please enter your name.";
        isValid = false;
    } else if (!name.match(/^[A-Za-z\s]+$/)) {
        document.getElementById("name-error").innerText = "Name should only contain letters and spaces.";
        isValid = false;
    }

    // Validate phone number
    var phonePattern = /^[0-9]{10}$/; // Example pattern for a 10-digit phone number
    if (phone === "") {
        document.getElementById("phone-error").innerText = "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phone-error").innerText = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate package selection
    if (package === "") {
        document.getElementById("package-error").innerText = "Please select a package.";
        isValid = false;
    }


    // Validate timing selection
    if (!timing) {
        document.getElementById("timing-error").innerText = "Please select a timing.";
        isValid = false;
    }

    return isValid;
}




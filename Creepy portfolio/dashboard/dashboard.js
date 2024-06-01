// Function to toggle dropdown menu
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

// Function to handle click events outside dropdown menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function to show spooky text on hover
function showSpookyText(event) {
    var spookyText = document.createElement("div");
    spookyText.textContent = ".";
    spookyText.style.position = "fixed"; // Change position to fixed to cover the whole viewport
    spookyText.style.top = (event.clientY + 10) + "px";
    spookyText.style.left = (event.clientX - 50) + "px"
    spookyText.style.color = " #880808";
    spookyText.style.fontFamily = "'Gloria Hallelujah', cursive";
    spookyText.style.fontSize = "54px";
    spookyText.style.zIndex = "9999";
    document.body.appendChild(spookyText); // Append to body instead of .container

    // Remove spooky text after a short delay
    setTimeout(function() {
        spookyText.remove();
    }, 1000); // Remove after 1 second
}

// Add event listener to document to trigger showSpookyText function on hover
document.addEventListener('mousemove', showSpookyText);

// Function to show arrow animation
function showArrowAnimation() {
    var arrow = document.createElement("div");
    arrow.className = "arrow-animation";
    arrow.textContent = "Will you click it?";
    document.body.appendChild(arrow);

    // Remove arrow after animation completes
    setTimeout(function() {
        arrow.remove();
    }, 2000); // Remove after 2 seconds (same duration as the animation)
}

// Add event listener to dropdown button to trigger arrow animation
document.querySelector('.dropbtn').addEventListener('mouseenter', showArrowAnimation);

// Function to show welcome message and quote
function showWelcomeMessage() {
    var welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.innerHTML = "<p>You still got a long way to go...</p><p>\"To reach the top, you must first go to the top right corner.\"</p>";
    document.body.appendChild(welcomeMessage);
}

// Call the function to show the welcome message
showWelcomeMessage();

// Add event listener to dropdown button to prevent dropdown content from hiding when clicked
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up and hiding the dropdown content
});
document.addEventListener('click', function(e) {
    // Create a blood burst container
    var bloodBurstContainer = document.createElement('div');
    bloodBurstContainer.className = 'blood-burst-container';
    bloodBurstContainer.style.position = 'absolute';
    bloodBurstContainer.style.left = e.clientX + 'px';
    bloodBurstContainer.style.top = e.clientY + 'px';
    
    // Create blood burst elements
    for (var i = 0; i < 10; i++) {
      var bloodBurst = document.createElement('div');
      bloodBurst.className = 'blood-burst';
      bloodBurst.style.background = 'red';
      bloodBurst.style.width = Math.floor(Math.random() * 10 + 5) + 'px';
      bloodBurst.style.height = Math.floor(Math.random() * 10 + 5) + 'px';
      bloodBurst.style.borderRadius = '50%';
      bloodBurst.style.position = 'absolute';
      bloodBurst.style.left = '50%';
      bloodBurst.style.top = '50%';
      bloodBurst.style.transform = 'translate(-50%, -50%)';
      bloodBurst.style.animation = 'blood-burst-animation 1s ease-out';
      bloodBurstContainer.appendChild(bloodBurst);
    }
    
    // Append the blood burst container to the body
    document.body.appendChild(bloodBurstContainer);
    
    // Remove the blood burst container after animation
    setTimeout(function() {
      bloodBurstContainer.remove();
    }, 1000);
  });


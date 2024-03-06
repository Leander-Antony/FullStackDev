// Function to show spooky text on hover
function showSpookyText(event) {
    var spookyText = document.createElement("div");
    spookyText.textContent = ".";
    spookyText.style.position = "fixed"; // Change position to fixed to cover the whole viewport
    spookyText.style.top = (event.clientY + 10) + "px";
    spookyText.style.left = (event.clientX + 10) + "px";
    spookyText.style.color = " #880808";
    spookyText.style.fontFamily = "'Gloria Hallelujah', cursive";
    spookyText.style.left = (event.clientX - 25) + "px"; // Adjust position as needed
    spookyText.style.top = (event.clientY - 10) + "px"; // Adjust position as needed
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
// Function to show spooky text on hover
function showSpookyText(event) {
    var spookyText = document.createElement("div");
    spookyText.textContent = ".";
    spookyText.style.position = "fixed"; 
    spookyText.style.top = (event.clientY + 10) + "px";
    spookyText.style.left = (event.clientX - 50) + "px"
    spookyText.style.color = "red";
    spookyText.style.fontFamily = "'Gloria Hallelujah', cursive";
    spookyText.style.fontSize = "54px";
    spookyText.style.zIndex = "9999";
    document.body.appendChild(spookyText); 

    
    setTimeout(function() {
        spookyText.remove();
    }, 1000); 
}


document.addEventListener('mousemove', showSpookyText);
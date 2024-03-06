document.getElementById("choosePathButton").addEventListener("click", function() {
    document.getElementById("creepyImg").style.display = "flex";
    document.querySelector(".container").style.display = "none";
});

document.getElementById("option1").addEventListener("click", function() {
    window.location.href = "dashboard.html"; // Redirect to dashboard.html
});

document.getElementById("option2").addEventListener("click", function() {
    window.location.href = "about.html"; // Redirect to about.html
});

document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("creepyImg").style.display = "none";
});

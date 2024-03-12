// Array of objects containing blog details
const blogsData = [
    {
        title: "Blog 1: Creepy Story 1",
        content: "Paragraph 1 of the creepy blog 1... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio eu magna semper finibus. ",
    },
    {
        title: "Blog 2: Creepy Story 2",
        content: "Paragraph 1 of the creepy blog 2... Phasellus sit amet lectus vitae elit aliquam fermentum. Integer nec lobortis est. ",
    },
    {
        title: "Blog 3: Creepy Story 3",
        content: "Paragraph 1 of the creepy blog 3... Fusce sit amet fermentum orci. In consectetur nunc at turpis gravida, eu placerat lorem tempus. ",
    },
    {
        title: "Blog 4: Creepy Story 4",
        content: "Paragraph 1 of the creepy blog 4... Duis vestibulum mauris id arcu ultrices, a cursus dolor lobortis. Sed eu diam ut magna volutpat tempor. ",
    },
    {
        title: "Blog 5: Creepy Story 5",
        content: "Paragraph 1 of the creepy blog 5... Vivamus laoreet velit vel tortor facilisis suscipit. Integer id tortor sollicitudin, varius odio id, placerat eros. ",
    },
    {
        title: "Blog 6: Creepy Story 6",
        content: "Paragraph 1 of the creepy blog 6... Proin vulputate, elit eu tincidunt scelerisque, arcu risus hendrerit elit, vel elementum justo neque non velit. ",
    }
];

// Function to create HTML elements for each blog
function createBlogElements() {
    const blogsContainer = document.getElementById("blogs");

    blogsData.forEach(blog => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");

        const titleElement = document.createElement("h2");
        titleElement.textContent = blog.title;

        const contentElement = document.createElement("p");
        contentElement.innerHTML = blog.content; // Using innerHTML to render HTML content

        blogDiv.appendChild(titleElement);
        blogDiv.appendChild(contentElement);

        blogsContainer.appendChild(blogDiv);
    });
}

// Call the function to create blog elements
createBlogElements();

// Add event listener for back to dashboard button
document.getElementById("backToDashboard").addEventListener("click", function() {
    window.location.href = "dashboard.html"; // Redirect to dashboard.html
});
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


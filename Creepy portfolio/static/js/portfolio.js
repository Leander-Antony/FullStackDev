// Array of objects containing project details
const projectsData = [
    {
        title: "Spam or ham classifier",
        description: "This project uses Python with scikit-learn, pandas, NLTK, and NumPy to create a basic SMS classifier. It categorizes text messages into predefined groups as Spam or not Spam.",
        link: "https://sms-classsifier.streamlit.app/"
    },
    {
        title: "Project 2: The Phantom Portfolio",
        description: "Dare to explore my first eerie creation—a portfolio website born from the shadows of HTML, CSS, and JavaScript. This is just the beginning; as my skills grow, so will the darkness within this site.",
    },
    {
        title: "Project 3: The Haunting Data Blog",
        description: "An upcoming collection of cryptic tales from the realm of data science. Expect unsettling insights, ghostly tutorials, and stories of data that refuse to rest. Keep your eyes open; the blog is coming soon.",
    },
    {
        title: "Project 4: The Discord Music Apparition",
        description: "A spectral music bot that haunts the halls of Discord. Crafted with Python, it plays tunes that might just summon spirits. The bot is ever-evolving, with new features emerging from the shadows.",
    },
    {
        title: "Project 5: The LLM Text Adventure Curse",
        description: "Step into a cursed narrative where your choices determine your fate. Powered by a large language model, this text-based adventure game will draw you into its twisted tale. But be warned—there’s no escape.",
    },
    {
        title: "Project 6: The Agents of Dread",
        description: "An ongoing experiment with agents that roam the digital underworld, extracting knowledge and uncovering truths best left forgotten. These agents act on their own, driven by unseen forces, and the results are as unpredictable as they are eerie.",
    }
];


// Function to create HTML elements for each project
function createProjectElements() {
    const projectsContainer = document.getElementById("projects");

    projectsData.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const titleElement = document.createElement("h2");
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;

        projectDiv.appendChild(titleElement);
        projectDiv.appendChild(descriptionElement);

        // If the project has a link, create an anchor element
        if (project.link) {
            const linkElement = document.createElement("a");
            linkElement.href = project.link;
            linkElement.textContent = "View Project";
            linkElement.target = "_blank"; // Open link in a new tab
            projectDiv.appendChild(linkElement);
        }

        projectsContainer.appendChild(projectDiv);
    });
}

// Call the function to create project elements when the page loads
document.addEventListener("DOMContentLoaded", function() {
    createProjectElements();

    // Add event listener for back to dashboard button
    document.getElementById("backToDashboard").addEventListener("click", function() {
        window.location.href = "dashboard.html"; // Redirect to dashboard.html
    });

    // Function to show spooky text on hover
    function showSpookyText(event) {
        var spookyText = document.createElement("div");
        spookyText.textContent = ".";
        spookyText.style.position = "fixed";
        spookyText.style.top = (event.clientY + 10) + "px";
        spookyText.style.left = (event.clientX - 50) + "px";
        spookyText.style.color = 'red';
        spookyText.style.fontFamily = "'Gloria Hallelujah', cursive";
        spookyText.style.fontSize = "54px";
        spookyText.style.zIndex = "9999";
        document.body.appendChild(spookyText);

        setTimeout(function() {
            spookyText.remove();
        }, 1000); // Remove after 1 second
    }

    // Add event listener to document to trigger showSpookyText function on hover
    document.addEventListener('mousemove', showSpookyText);
});

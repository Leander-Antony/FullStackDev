// Array of objects containing project details
const projectsData = [
    {
        title: "Spam or ham classifier",
        description: "This project uses Python with scikit-learn, pandas, NLTK, and NumPy to create a basic SMS classifier. It categorizes text messages into predefined groups as Spam or not Spam.",
        link: "https://sms-classsifier.streamlit.app/"
    },
    {
        title: "Project 2: The Black Death",
        description: "The Black Death, also known as the Great Plague or the Bubonic Plague, was one of the most devastating pandemics in human history. It swept through Europe, Asia, and Africa in the 14th century, killing an estimated 75–200 million people.",
    },
    {
        title: "Project 3: The Spanish Inquisition",
        description: "The Spanish Inquisition was a judicial institution established by the Catholic Monarchs Ferdinand II of Aragon and Isabella I of Castile in 1478. It was intended to maintain Catholic orthodoxy in their kingdoms and to replace the Medieval Inquisition, which was under Papal control.",
    },
    {
        title: "Project 4: The Lizzie Borden Axe Murders",
        description: "The Lizzie Borden axe murders occurred in Fall River, Massachusetts, in 1892. Lizzie Borden was accused of murdering her father and stepmother with an axe, but she was acquitted at trial due to lack of evidence.",
    },
    {
        title: "Project 5: The Chernobyl Disaster",
        description: "The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the No. 4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR. It is considered the worst nuclear disaster in history and resulted in a widespread release of radioactive material.",
    },
    {
        title: "Project 6: The Jonestown Massacre",
        description: "The Jonestown Massacre was the mass suicide of members of the Peoples Temple cult led by Jim Jones in November 1978. More than 900 people died, most of them by drinking cyanide-laced Flavor Aid, in Jonestown, Guyana.",
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

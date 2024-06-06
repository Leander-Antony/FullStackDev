// Array of objects containing blog details
const blogsData = [
    {
        title: "A Trusting the Journey: Why Unexpected Turns Can Be Blessings",
        content: "Life loves throwing us off course. We meticulously plan our vacations, careers, and even our grocery lists, only to have fate chuck a detour our way...",
        url: "https://medium.com/@LeanderAntony/a-trusting-the-journey-why-unexpected-turns-can-be-blessings-47b288e5e377"
    },
    {
        title: "You don’t need anyone. Just focus on yourself. Really?",
        content: "Remember Tom Hanks in “Cast Away,” befriending a volleyball named Wilson? Hilarious, right? But even the most self-sufficient guy stranded on a desert island eventually craved human connection...",
        url: "https://medium.com/@LeanderAntony/you-dont-need-anyone-just-focus-on-yourself-really-a71d0918c99e"
    },
    {
        title: "What If Our Life Was a Game? (Spoiler: It Kinda Is)",
        content: "Ever think life is like a big video game? We follow these unwritten rules, like waiting in line and saying “bless you” when someone sneezes (unless you’re a rebel in socks and sandals)...",
        url: "https://medium.com/@LeanderAntony/what-if-our-life-was-a-game-spoiler-it-kinda-is-e8d3f93cef5f"
    },
    {
        title: "Breaking the Chains of Procrastination.",
        content: "Are you familiar with the phrases “I will do it when the time comes” or “I will do it when the time is right”? These expressions often serve as masks for procrastination, disguising the underlying fear of leaving our comfort zones.",
        url: "https://medium.com/@LeanderAntony/breaking-the-chains-of-procrastination-embrace-discomfort-to-pursue-your-dreams-dd27abd61e0d?source=user_profile---------5----------------------------"
    },
    {
        title: "From Loneliness to Fulfillment: Applying Stoic Philosophy to Personal Growth",
        content: "I used to be a loner, even though I craved attention from others. My friends just didn’t seem interested, and I often felt ignored. Even by the end of school, I was still alone...",
        url: "https://medium.com/@LeanderAntony/from-loneliness-to-fulfillment-applying-stoic-philosophy-to-personal-growth-2b378127c3a3"
    },
    {
        title: "Make Data Work for You: A Beginner’s Guide to Power BI Data Modeling",
        content: "When Excel gets cramped by your growing data, Power BI swoops in as a superhero of data organization. But before creating stunning reports, data modeling, the act of tidying your data for analysis, is key...",
        url: "https://medium.com/@LeanderAntony/make-data-work-for-you-a-beginners-guide-to-power-bi-data-modeling-314e21a6a525"
    }
];

// Function to create HTML elements for each blog
function createBlogElements() {
    const blogsContainer = document.getElementById("blogs");

    blogsData.forEach(blog => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");

        const titleElement = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.textContent = blog.title;
        titleLink.href = blog.url;
        titleLink.target = "_blank";
        titleLink.style.color = "inherit";
        titleLink.style.textDecoration = "none";
        titleElement.appendChild(titleLink);

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

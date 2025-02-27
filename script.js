
const projects = {
    "SLR-card": {
        title: "Real-time Speed Limit Recognition",
        description: "A speed limit recognition (SLR) system proposed for autonomous driving vehicles. My project was the development of an innovative standalone system that can detect the speed limit and notify drivers audibly when they exceed these limits. Using both off-the-shelf components coupled with specialised 3D parts, I created this standalone real time Speed Limit Recognition (SLR) device. The SLR software was created using Python - testing multiple classifier models such as MLP neural networks, k-Nearet Neighbours and Support Vector Machines (SVMs). An additional web-application was built from scratch using Flask to monitor the real-time camera detections and performance metrics. This system has a 98.3% classification accuracy in real-time traffic settings.",
        tools: "Python, Flask, OpenCV, TensorFlow, Raspberry Pi, Electroncis, CAD, 3D-Printing",
        videoId: "_U35ZOZYeOU"
    },
    "STEM-card": {
        title: "STEM Motion Box (iOS App)",
        description: "STEM Motion Box is an an educational app I developed for students to learn about projectile motion (kinematics). This <strong>project won 1st place in the 2019 National Excellence in Education awards</strong>. Features of this simulation include single-body projectile motion, two-body projectile motion with collision decection and additional slow motion features.",
        tools: "Swift, Photoshop",        
        videoId: "Lt0DDMBmCMo"
    },
    "vending-card": {
        title: "Autonomous Vending Machine",
        description: "Alongside three ambitious group mates in Mechatronics 424, I engaged and collaborated to create an automated vending machine & corresponding graphical interface to vend ping pong balls, small cubes and marbles. Most significantly, our concept integrated a vacuum suction mechanism to collect the user’s requested item. We utilised our design capabilities in CAD to make specialised parts that were 3D printed.",
        tools: "Siemens TIA Portal, Inventor (CAD), Workshop, Electronics, Control Systems",
        videoId: "r2VxEKg__6E"
    },
    "full-stack-card": {
        title: "Full Stack Engineer Course",
        description: "I am currently undertaking comprehensive course covering front-end and back-end web development. The course covers Web Development Foundations, Interactive Website Design, Front-End Development, Back-End Development, Full-Stack Development and assists with interview preparations. I have completed 2 of the 5 units of the course. More specifically, I have progressed through 30% of the course.",
        tools: "HTML5, CSS3, Javascript, Git, React, Node.js, PostgreSQL",
        videoId: "pJrAkqk9a-I"
    },
    "game-card": {
        title: "AI 2048 (Web-app)",
        description: "This project is a self-developed web app version of 2048. The game has be entirely recreated from scratch. Additional an AI agent is being implemented to solve the game using the Monte Carlo Tree-Search algorithm.",
        tools: "HTML5, CSS3, JavaScript, Monte Carlo Tree Search",
        videoId: "./resources/ai2048.jpg"
    },
    "chaos-card": {
        title: "Chaos (iOS Game)",
        description: "An interactive iOS hyper game that was developed from scratch. 'Chaos.' is a game about focus with a single but simple game mechanic. Tap to change directions and collect the light fragments. Move in an endless space, but beware, it’s dangerous as it’s filled with chaotic elements. Immerse yourself in the music, stunning visuals and simple gameplay. This game also includes a leaderboard system using Firebase.",
        tools: "Swift, SpriteKit, Photoshop, Firebase",
        videoId:"iSHyfkDgks8"
    }
};


let queue = ['surfing', 'kitesurfing', 'trail', 'guitar', 'cooking', 'travel', 'skating', 'climbing']

function switchColour() {
    card = document.getElementsByClassName(`${queue[0]}-card`)[0]
    card.style.background = `linear-gradient(rgba(51, 104, 114, 0.7), rgba(0, 0, 0, 0.9)), url("./resources/${card.classList[1]}.png")` 
    card.style.backgroundSize = "cover"
    
    queue.push(queue[0]) // Enqueue next
    queue.shift(); // Dequeue item
    newCard = document.getElementsByClassName(`${queue[0]}-card`)[0]
    newCard.style.background = `linear-gradient(rgba(172, 148, 212, 0.7), rgba(0, 0, 0, 0.9)), url("./resources/${newCard.classList[1]}.png")`
    newCard.style.backgroundSize = "cover"

}

function updateTime() {
    const options = {
        timeZone: 'Africa/Johannesburg',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        dayPeriod: 'short'
    };

    const cptTime = new Intl.DateTimeFormat('en-GB', options).format(new Date());
    console.log(cptTime)
    document.getElementById('time-label').innerHTML= `Cape Town based: <strong>${cptTime}</strong>`;
}

// Function to display the selected project in the presentation card
function presentCard(event) {
    let projectCard = event.currentTarget;
    let projectClass = projectCard.classList[1]; // Get second class as the project ID

    if (projects[projectClass]) {
        let project = projects[projectClass];
        let card = document.querySelector(".presentation-card")
        card.style.display = "block";
        // Update the presentation card content
        let info = document.querySelector(".presentation-card .info");
        info.innerHTML = `<h2>${project.title}</h2> 
                          <p>${project.description}</p> 
                          <p><strong>Tools:</strong> ${project.tools}</p>`;
        // Update the video in the presentation card
        let videoContainer = document.querySelector(".presentation-card .video-container");
        let iframe = videoContainer.querySelector("iframe");

        // Set the appropriate iframe source for the selected project
        iframe.src = `https://www.youtube.com/embed/${project.videoId}`;

    }
}

// Attach event listeners to all project cards
document.querySelectorAll(".project-grid .card").forEach((card) => {
    card.addEventListener("click", presentCard);
});


function moveToSection(event) {
    // Define mapping from card classes to section IDs
    const sectionMap = {
        "home": "intro-sec",
        "about": "about-sec",
        "tech": "tech-stack-sec",
        "hobbies": "hobby-sec",
        "connect": "footer",
        "projects": "project-sec"
    };

    // Get the clicked card
    let clickedCard = event.currentTarget;

    // Find the matching section based on the card's class
    for (let cardClass in sectionMap) {
        if (clickedCard.classList.contains(cardClass)) {
            let targetSection = document.getElementById(sectionMap[cardClass]);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            return; // Stop execution once we find a match
        }
    }
}

// Attach event listeners to all navigation items cards
document.querySelectorAll(".nav-bar li").forEach((nav) => {
    nav.addEventListener("click", moveToSection);
});

// Attach event listeners to all clickable cards
document.querySelectorAll(".tech-stack-card, .hobby-card, .connect-card, .project-card").forEach((card) => {
    card.addEventListener("click", moveToSection);
});

// Attach event listeners to all project cards
document.querySelectorAll("#about-sec .card").forEach((card) => {
    card.addEventListener("click", moveToSection);
});

// Attach event listeners to all project cards
document.querySelectorAll("#about-sec .card").forEach((card) => {
    card.addEventListener("click", moveToSection);
});

setInterval(updateTime, 1000);
setInterval(switchColour, 200);

updateTime();
switchColour();

window.onload = function() {
    // Assuming you want to simulate a click on the first project card
    const firstProjectCard = document.querySelector(".SLR-card"); // Adjust the selector accordingly
    console.log(firstProjectCard)
    if (firstProjectCard) {
        firstProjectCard.click();  // Trigger the click event programmatically
    }
};
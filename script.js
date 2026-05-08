const themeBtn = document.getElementById("themeBtn");
const savedPathText = document.getElementById("savedPathText");
const clearSavedBtn = document.getElementById("clearSavedBtn");

const regionSelect = document.getElementById("regionSelect");
const topCareerName = document.getElementById("topCareerName");
const topCareerScore = document.getElementById("topCareerScore");
const topCareerRegion = document.getElementById("topCareerRegion");
const demandBars = document.getElementById("demandBars");

const quizForm = document.getElementById("quizForm");
const recommendationTitle = document.getElementById("recommendationTitle");
const recommendationText = document.getElementById("recommendationText");
const viewRecommendedBtn = document.getElementById("viewRecommendedBtn");

const searchInput = document.getElementById("searchInput");
const careerSelect = document.getElementById("careerSelect");
const savePathBtn = document.getElementById("savePathBtn");

const careerTitle = document.getElementById("careerTitle");
const careerCategory = document.getElementById("careerCategory");
const careerDescription = document.getElementById("careerDescription");
const difficultyBadge = document.getElementById("difficultyBadge");
const learningTime = document.getElementById("learningTime");
const demandLevel = document.getElementById("demandLevel");
const remoteLevel = document.getElementById("remoteLevel");
const competitionLevel = document.getElementById("competitionLevel");

const selectedDemandScore = document.getElementById("selectedDemandScore");
const selectedRankText = document.getElementById("selectedRankText");

const jobsList = document.getElementById("jobsList");
const skillsList = document.getElementById("skillsList");
const toolsList = document.getElementById("toolsList");
const projectsList = document.getElementById("projectsList");
const roadmapList = document.getElementById("roadmapList");

let recommendedCareer = null;

const careers = {
  frontend: {
    title: "Frontend Development",
    category: "Web Development",
    description: "Frontend Development focuses on building the visual and interactive parts of websites and web applications that users see and use.",
    jobs: ["Frontend Developer", "React Developer", "Web Designer", "UI Developer"],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM", "Problem Solving"],
    tools: ["VS Code", "Git", "GitHub", "React", "Bootstrap", "Figma"],
    roadmap: [
      "Learn HTML structure and semantic elements.",
      "Learn CSS, Flexbox, Grid, and responsive design.",
      "Learn JavaScript basics, DOM, events, and functions.",
      "Build small projects like landing pages and calculators.",
      "Learn React and component-based development.",
      "Build a portfolio and upload projects to GitHub."
    ],
    projects: ["Portfolio Website", "Weather App", "E-commerce Page", "Admin Dashboard", "Movie Search App"],
    difficulty: "Medium",
    time: "4 - 6 months",
    demand: "High",
    remote: "High",
    competition: "High"
  },

  backend: {
    title: "Backend Development",
    category: "Web Development",
    description: "Backend Development focuses on server logic, APIs, databases, authentication, and everything that works behind the scenes.",
    jobs: ["Backend Developer", "API Developer", "Node.js Developer", "Server-side Developer"],
    skills: ["Programming", "APIs", "Databases", "Authentication", "Security Basics", "Problem Solving"],
    tools: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Postman", "GitHub"],
    roadmap: [
      "Learn programming basics using JavaScript or Python.",
      "Understand how the web works: HTTP, requests, and responses.",
      "Learn backend framework like Express or Django.",
      "Learn databases and SQL basics.",
      "Build APIs with authentication and validation.",
      "Deploy backend projects online."
    ],
    projects: ["REST API", "Login System", "Blog Backend", "E-commerce Backend", "Task Manager API"],
    difficulty: "Medium-Hard",
    time: "6 - 8 months",
    demand: "High",
    remote: "High",
    competition: "Medium"
  },

  fullstack: {
    title: "Full Stack Development",
    category: "Web Development",
    description: "Full Stack Development combines frontend and backend skills to build complete web applications from interface to database.",
    jobs: ["Full Stack Developer", "MERN Developer", "Web Application Developer", "Software Developer"],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Databases", "APIs"],
    tools: ["React", "Node.js", "Express", "MongoDB", "Git", "Vercel", "Render"],
    roadmap: [
      "Learn frontend basics: HTML, CSS, and JavaScript.",
      "Learn React and build frontend projects.",
      "Learn backend basics and REST APIs.",
      "Learn databases and authentication.",
      "Connect frontend with backend.",
      "Build and deploy complete full stack projects."
    ],
    projects: ["Full Stack Blog", "E-commerce Website", "Learning Platform", "Chat App", "Job Board Website"],
    difficulty: "Hard",
    time: "8 - 12 months",
    demand: "Very High",
    remote: "High",
    competition: "High"
  },

  mobile: {
    title: "Mobile App Development",
    category: "Application Development",
    description: "Mobile App Development focuses on building applications for Android and iOS devices using native or cross-platform technologies.",
    jobs: ["Mobile Developer", "Flutter Developer", "Android Developer", "React Native Developer"],
    skills: ["Programming", "UI Design", "APIs", "State Management", "App Storage", "Debugging"],
    tools: ["Flutter", "Dart", "Android Studio", "Firebase", "React Native", "Git"],
    roadmap: [
      "Learn programming basics.",
      "Choose Flutter or React Native.",
      "Learn mobile UI components and navigation.",
      "Connect apps with APIs and databases.",
      "Learn authentication and local storage.",
      "Publish demo apps and build a portfolio."
    ],
    projects: ["Notes App", "Fitness App", "Food Delivery App", "Chat App", "Expense Tracker"],
    difficulty: "Medium",
    time: "5 - 8 months",
    demand: "High",
    remote: "Medium",
    competition: "Medium"
  },

  cybersecurity: {
    title: "Cyber Security",
    category: "Security",
    description: "Cyber Security focuses on protecting systems, networks, websites, and data from attacks, threats, and unauthorized access.",
    jobs: ["SOC Analyst", "Security Analyst", "Penetration Tester", "Network Security Engineer"],
    skills: ["Networking", "Linux", "Web Security", "Python", "Cryptography Basics", "Problem Solving"],
    tools: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "TryHackMe", "Metasploit"],
    roadmap: [
      "Learn computer networks and OSI model.",
      "Learn Linux commands and system basics.",
      "Learn Python scripting.",
      "Study web security and common vulnerabilities.",
      "Practice on TryHackMe and Hack The Box.",
      "Write security reports and apply for internships."
    ],
    projects: ["Password Strength Checker", "Port Scanner", "Security Report Template", "Basic Vulnerability Scanner", "Phishing Awareness Page"],
    difficulty: "Hard",
    time: "6 - 10 months",
    demand: "Very High",
    remote: "Medium",
    competition: "Medium"
  },

  ai: {
    title: "Artificial Intelligence",
    category: "AI & Machine Learning",
    description: "Artificial Intelligence focuses on building systems that can learn, reason, predict, classify, and make intelligent decisions.",
    jobs: ["AI Engineer", "Machine Learning Engineer", "Computer Vision Engineer", "NLP Engineer"],
    skills: ["Python", "Math", "Statistics", "Algorithms", "Machine Learning", "Data Processing"],
    tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter Notebook"],
    roadmap: [
      "Learn Python programming very well.",
      "Study math basics: linear algebra, probability, and statistics.",
      "Learn data analysis using NumPy and Pandas.",
      "Learn machine learning algorithms.",
      "Build ML projects and evaluate models.",
      "Learn deep learning basics and build AI portfolio."
    ],
    projects: ["Spam Email Classifier", "Image Classifier", "Chatbot", "House Price Prediction", "Face Detection App"],
    difficulty: "Hard",
    time: "8 - 12 months",
    demand: "Very High",
    remote: "High",
    competition: "High"
  },

  datascience: {
    title: "Data Science",
    category: "Data",
    description: "Data Science focuses on collecting, cleaning, analyzing, and visualizing data to extract useful insights and support decisions.",
    jobs: ["Data Analyst", "Data Scientist", "BI Analyst", "Data Visualization Specialist"],
    skills: ["Excel", "SQL", "Python", "Statistics", "Data Cleaning", "Visualization"],
    tools: ["Excel", "Power BI", "Python", "Pandas", "SQL", "Tableau"],
    roadmap: [
      "Learn Excel and spreadsheet analysis.",
      "Learn SQL and database queries.",
      "Learn Python basics and Pandas.",
      "Study statistics and data cleaning.",
      "Create dashboards using Power BI or Tableau.",
      "Build data analysis case studies."
    ],
    projects: ["Sales Dashboard", "Student Performance Analysis", "COVID Data Analysis", "Customer Churn Analysis", "E-commerce Insights Dashboard"],
    difficulty: "Medium",
    time: "5 - 8 months",
    demand: "Very High",
    remote: "High",
    competition: "Medium"
  },

  cloud: {
    title: "Cloud Computing",
    category: "Infrastructure",
    description: "Cloud Computing focuses on managing online servers, storage, databases, networking, and scalable applications on cloud platforms.",
    jobs: ["Cloud Engineer", "AWS Engineer", "Cloud Support Engineer", "Solutions Architect"],
    skills: ["Networking", "Linux", "Cloud Services", "Security", "Databases", "System Design"],
    tools: ["AWS", "Azure", "Google Cloud", "Linux", "Docker", "Terraform"],
    roadmap: [
      "Learn networking and Linux basics.",
      "Understand cloud concepts: compute, storage, and networking.",
      "Choose AWS, Azure, or Google Cloud.",
      "Learn IAM, virtual machines, databases, and deployment.",
      "Practice with small cloud projects.",
      "Study cloud security and cost management."
    ],
    projects: ["Deploy Static Website", "Cloud Database App", "Server Monitoring Setup", "Auto Scaling Demo", "Cloud Storage System"],
    difficulty: "Medium-Hard",
    time: "6 - 9 months",
    demand: "Very High",
    remote: "High",
    competition: "Medium"
  },

  devops: {
    title: "DevOps",
    category: "Infrastructure & Automation",
    description: "DevOps combines development and operations to automate deployment, manage servers, and improve software delivery pipelines.",
    jobs: ["DevOps Engineer", "CI/CD Engineer", "Site Reliability Engineer", "Release Engineer"],
    skills: ["Linux", "Git", "Docker", "CI/CD", "Cloud", "Monitoring", "Scripting"],
    tools: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "Linux"],
    roadmap: [
      "Learn Linux and command line.",
      "Learn Git and GitHub workflows.",
      "Learn Docker and containerization.",
      "Learn CI/CD using GitHub Actions or Jenkins.",
      "Learn cloud deployment basics.",
      "Practice monitoring, logging, and automation."
    ],
    projects: ["Dockerized Web App", "CI/CD Pipeline", "Server Monitoring Dashboard", "Auto Deployment Project", "Kubernetes Demo"],
    difficulty: "Hard",
    time: "8 - 12 months",
    demand: "Very High",
    remote: "High",
    competition: "Medium"
  },

  uiux: {
    title: "UI/UX Design",
    category: "Design",
    description: "UI/UX Design focuses on designing user-friendly interfaces, improving user experience, and creating attractive digital products.",
    jobs: ["UI Designer", "UX Designer", "Product Designer", "UX Researcher"],
    skills: ["Design Principles", "User Research", "Wireframing", "Prototyping", "Typography", "Color Theory"],
    tools: ["Figma", "Adobe XD", "Miro", "Canva", "Notion", "FigJam"],
    roadmap: [
      "Learn design principles and color theory.",
      "Study user experience basics.",
      "Learn Figma and wireframing.",
      "Create prototypes and user flows.",
      "Analyze real apps and redesign screens.",
      "Build a UI/UX case study portfolio."
    ],
    projects: ["Mobile App Design", "Website Redesign", "Dashboard UI", "Landing Page Design", "UX Case Study"],
    difficulty: "Medium",
    time: "4 - 6 months",
    demand: "High",
    remote: "High",
    competition: "High"
  },

  testing: {
    title: "Software Testing",
    category: "Quality Assurance",
    description: "Software Testing focuses on checking software quality, finding bugs, writing test cases, and making sure applications work correctly.",
    jobs: ["QA Tester", "Manual Tester", "Automation Tester", "Software Quality Engineer"],
    skills: ["Testing Basics", "Test Cases", "Bug Reports", "Automation Basics", "Attention to Detail", "APIs"],
    tools: ["Selenium", "Postman", "Jira", "TestRail", "Cypress", "Git"],
    roadmap: [
      "Learn software testing concepts.",
      "Learn how to write test cases and bug reports.",
      "Practice manual testing on websites and apps.",
      "Learn API testing using Postman.",
      "Learn automation basics with Selenium or Cypress.",
      "Build a testing portfolio with reports."
    ],
    projects: ["Website Test Plan", "Bug Report Document", "API Testing Collection", "Automation Login Test", "E-commerce Testing Report"],
    difficulty: "Easy-Medium",
    time: "3 - 5 months",
    demand: "Medium-High",
    remote: "Medium",
    competition: "Medium"
  },

  database: {
    title: "Database Administration",
    category: "Data Management",
    description: "Database Administration focuses on designing, managing, securing, backing up, and optimizing databases.",
    jobs: ["Database Administrator", "SQL Developer", "Database Engineer", "Data Engineer Assistant"],
    skills: ["SQL", "Database Design", "Backup", "Security", "Performance Tuning", "Data Modeling"],
    tools: ["MySQL", "PostgreSQL", "SQL Server", "Oracle", "MongoDB", "DBeaver"],
    roadmap: [
      "Learn SQL from basics to advanced queries.",
      "Study database design and normalization.",
      "Learn indexes, joins, views, and stored procedures.",
      "Learn backup and recovery basics.",
      "Practice performance optimization.",
      "Build database projects and ERD diagrams."
    ],
    projects: ["University Database", "Library System Database", "Store Inventory Database", "Hospital Database", "SQL Reports Project"],
    difficulty: "Medium",
    time: "5 - 7 months",
    demand: "High",
    remote: "Medium",
    competition: "Medium"
  },

  game: {
    title: "Game Development",
    category: "Game Industry",
    description: "Game Development focuses on designing and programming video games, gameplay mechanics, graphics, levels, and interactive experiences.",
    jobs: ["Game Developer", "Unity Developer", "Gameplay Programmer", "Level Designer"],
    skills: ["Programming", "Game Physics", "Math Basics", "Animation", "Problem Solving", "Game Design"],
    tools: ["Unity", "C#", "Unreal Engine", "Blender", "Git", "Photoshop"],
    roadmap: [
      "Learn programming basics with C# or C++.",
      "Learn game engine basics like Unity.",
      "Build simple 2D games.",
      "Learn physics, collisions, and animations.",
      "Build 3D game prototypes.",
      "Publish games on itch.io or GitHub."
    ],
    projects: ["2D Platformer", "Puzzle Game", "Car Racing Game", "Shooting Game", "Simple 3D Adventure"],
    difficulty: "Hard",
    time: "8 - 12 months",
    demand: "Medium",
    remote: "Medium",
    competition: "High"
  },

  embedded: {
    title: "Embedded Systems",
    category: "Hardware & Software",
    description: "Embedded Systems focuses on programming devices, microcontrollers, sensors, and systems that interact with hardware.",
    jobs: ["Embedded Software Engineer", "IoT Developer", "Firmware Engineer", "Robotics Developer"],
    skills: ["C Programming", "Electronics Basics", "Microcontrollers", "Sensors", "RTOS Basics", "Debugging"],
    tools: ["Arduino", "ESP32", "STM32", "C", "Proteus", "Keil"],
    roadmap: [
      "Learn C programming basics.",
      "Study electronics fundamentals.",
      "Use Arduino for simple projects.",
      "Learn sensors, motors, and communication protocols.",
      "Move to ESP32 or STM32.",
      "Build IoT and hardware-based projects."
    ],
    projects: ["Smart Home System", "Temperature Monitor", "Line Follower Robot", "IoT Weather Station", "Door Lock System"],
    difficulty: "Hard",
    time: "8 - 12 months",
    demand: "Medium-High",
    remote: "Low-Medium",
    competition: "Medium"
  }
};

const demandData = {
  Global: {
    ai: 95,
    cybersecurity: 92,
    cloud: 89,
    datascience: 86,
    fullstack: 84,
    devops: 82,
    backend: 80,
    frontend: 78,
    mobile: 76,
    database: 72,
    uiux: 70,
    testing: 68,
    embedded: 65,
    game: 60
  },

  Egypt: {
    fullstack: 88,
    frontend: 86,
    backend: 84,
    mobile: 80,
    datascience: 78,
    cybersecurity: 76,
    testing: 75,
    uiux: 72,
    database: 70,
    cloud: 68,
    devops: 65,
    ai: 64,
    embedded: 62,
    game: 55
  },

  USA: {
    ai: 96,
    cloud: 94,
    cybersecurity: 93,
    devops: 90,
    datascience: 88,
    backend: 85,
    fullstack: 84,
    database: 78,
    mobile: 76,
    frontend: 75,
    uiux: 72,
    testing: 70,
    embedded: 68,
    game: 63
  },

  Europe: {
    cybersecurity: 93,
    ai: 91,
    cloud: 90,
    devops: 87,
    datascience: 85,
    backend: 82,
    fullstack: 80,
    frontend: 78,
    database: 76,
    testing: 73,
    mobile: 72,
    uiux: 70,
    embedded: 68,
    game: 62
  },

  Gulf: {
    cloud: 94,
    cybersecurity: 92,
    datascience: 88,
    backend: 85,
    fullstack: 83,
    devops: 82,
    ai: 80,
    database: 78,
    mobile: 76,
    frontend: 74,
    testing: 72,
    uiux: 70,
    embedded: 66,
    game: 58
  }
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️ Light Mode";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

regionSelect.addEventListener("change", function () {
  renderDemandDashboard();
  renderSelectedCareer();
});

careerSelect.addEventListener("change", function () {
  renderSelectedCareer();
});

searchInput.addEventListener("input", function () {
  renderCareerOptions(searchInput.value);
});

savePathBtn.addEventListener("click", function () {
  const selectedKey = careerSelect.value;

  if (!selectedKey || !careers[selectedKey]) {
    alert("Please select a valid career path first.");
    return;
  }

  localStorage.setItem("savedCareer", selectedKey);
  renderSavedPath();
  alert("Career path saved successfully.");
});

clearSavedBtn.addEventListener("click", function () {
  localStorage.removeItem("savedCareer");
  renderSavedPath();
});

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(quizForm);
  const scores = {};

  Object.keys(careers).forEach(function (key) {
    scores[key] = 0;
  });

  for (const value of formData.values()) {
    scores[value] += 1;
  }

  let bestCareer = Object.keys(scores)[0];

  Object.keys(scores).forEach(function (key) {
    if (scores[key] > scores[bestCareer]) {
      bestCareer = key;
    }
  });

  recommendedCareer = bestCareer;

  recommendationTitle.textContent = careers[bestCareer].title;

  recommendationText.textContent =
    "This recommendation is based on your answers, interests, and preferred working style.";
});

viewRecommendedBtn.addEventListener("click", function () {
  if (!recommendedCareer) {
    alert("Please complete the quiz first.");
    return;
  }

  careerSelect.value = recommendedCareer;
  renderSelectedCareer();

  document.getElementById("careerSection").scrollIntoView({
    behavior: "smooth"
  });
});

function renderCareerOptions(searchText = "") {
  careerSelect.innerHTML = "";

  const text = searchText.toLowerCase();

  Object.keys(careers).forEach(function (key) {
    const career = careers[key];

    const searchableText = [
      career.title,
      career.category,
      career.description,
      career.jobs.join(" "),
      career.skills.join(" "),
      career.tools.join(" ")
    ].join(" ").toLowerCase();

    if (searchableText.includes(text)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = career.title;
      careerSelect.appendChild(option);
    }
  });

  if (careerSelect.options.length === 0) {
  const option = document.createElement("option");
  option.value = "";
  option.textContent = "No careers found";
  careerSelect.appendChild(option);

  careerTitle.textContent = "No career found";
  careerCategory.textContent = "Search Result";
  careerDescription.textContent = "Try searching with another keyword.";
  difficultyBadge.textContent = "--";

  learningTime.textContent = "--";
  demandLevel.textContent = "--";
  remoteLevel.textContent = "--";
  competitionLevel.textContent = "--";

  selectedDemandScore.textContent = "--";
  selectedRankText.textContent = "No selected path.";

  jobsList.innerHTML = "";
  skillsList.innerHTML = "";
  toolsList.innerHTML = "";
  projectsList.innerHTML = "";
  roadmapList.innerHTML = "";

  return;
}

renderSelectedCareer();
}

function renderSelectedCareer() {
  const selectedKey = careerSelect.value;

  if (!selectedKey || !careers[selectedKey]) {
    return;
  }

  const career = careers[selectedKey];

  careerTitle.textContent = career.title;
  careerCategory.textContent = career.category;
  careerDescription.textContent = career.description;
  difficultyBadge.textContent = career.difficulty;

  learningTime.textContent = career.time;
  demandLevel.textContent = career.demand;
  remoteLevel.textContent = career.remote;
  competitionLevel.textContent = career.competition;

  renderChips(jobsList, career.jobs);
  renderChips(skillsList, career.skills);
  renderChips(toolsList, career.tools);
  renderProjects(career.projects);
  renderRoadmap(career.roadmap);

  renderSelectedDemand(selectedKey);
}

function renderChips(container, items) {
  container.innerHTML = "";

  items.forEach(function (item) {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = item;
    container.appendChild(span);
  });
}

function renderProjects(projects) {
  projectsList.innerHTML = "";

  projects.forEach(function (project) {
    const div = document.createElement("div");
    div.className = "project-item";
    div.textContent = project;
    projectsList.appendChild(div);
  });
}

function renderRoadmap(steps) {
  roadmapList.innerHTML = "";

  steps.forEach(function (step, index) {
    const div = document.createElement("div");
    div.className = "roadmap-step";

    div.innerHTML = `
      <div class="step-number">${index + 1}</div>
      <div class="step-content">${step}</div>
    `;

    roadmapList.appendChild(div);
  });
}

function renderDemandDashboard() {
  const region = regionSelect.value;
  const data = demandData[region];

  const sortedCareers = Object.keys(data).sort(function (a, b) {
    return data[b] - data[a];
  });

  const topKey = sortedCareers[0];

  topCareerName.textContent = careers[topKey].title;
  topCareerScore.textContent = data[topKey] + "%";
  topCareerRegion.textContent = region;

  demandBars.innerHTML = "";

  sortedCareers.forEach(function (key) {
    const row = document.createElement("div");
    row.className = "demand-row";

    row.innerHTML = `
      <span>${careers[key].title}</span>
      <div class="bar-bg">
        <div class="bar-fill" style="width: ${data[key]}%"></div>
      </div>
      <strong>${data[key]}%</strong>
    `;

    demandBars.appendChild(row);
  });
}

function renderSelectedDemand(selectedKey) {
  const region = regionSelect.value;
  const data = demandData[region];

  const sortedCareers = Object.keys(data).sort(function (a, b) {
    return data[b] - data[a];
  });

  const rank = sortedCareers.indexOf(selectedKey) + 1;
  const score = data[selectedKey];

  selectedDemandScore.textContent = score + "%";

  document.querySelector(".circle-score").style.background =
    `conic-gradient(var(--main) ${score}%, var(--border) 0)`;

  selectedRankText.textContent =
    `${careers[selectedKey].title} is ranked #${rank} in ${region} with a demand score of ${score}%.`;
}

function renderSavedPath() {
  const savedKey = localStorage.getItem("savedCareer");

  if (savedKey && careers[savedKey]) {
    savedPathText.textContent = careers[savedKey].title;
  } else {
    savedPathText.textContent = "No saved path yet";
  }
}

renderCareerOptions();
renderDemandDashboard();
renderSavedPath();


const projects = [
  {
    title: "To-Do App",
    description: "A clean and responsive to-do list app to organize your daily tasks effectively.",
    link: "https://to-do11.netlify.app/"
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio site showcasing my projects, skills, and contact info.",
    link: "https://portfoliopranavs.netlify.app/#"
  },
  {
    title: "LeetCode Tracker",
    description: "Track your coding progress, solved problems, and difficulty-based stats.",
    link: "https://leetcodetracker1.netlify.app/"
  }
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "article");
  card.setAttribute("aria-label", project.title);

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" class="btn" aria-label="View ${project.title} project">View Project</a>
  `;

  projectList.appendChild(card);
});

  
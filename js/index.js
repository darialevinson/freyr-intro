// Get the current year for the copyright footer
let today = new Date()
let thisYear = today.getFullYear()

// Display the current date in the console
console.log(today)

// Add a copyright statement to the footer
let footer = document.querySelector('footer')
let copyright = document.createElement('p')
let yourName = "Daria"
copyright.innerHTML = `${yourName} ${thisYear}`
footer.appendChild(copyright)

// Toggle the 'active' class on the menu toggle button when clicked
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// Populate the skills section with skills from the array
let skills = ['HTML', 'CSS', 'JavaScript', 'Frameworks', 'React']
let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li')
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}

// Handle form submission for leaving a message
let messageForm = document.getElementById("leave_message")
messageForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const userName = event.target.querySelector('[name="usersName"]').value;
  const userEmail = event.target.querySelector('[name="usersEmail"]').value;
  const usersMessage = event.target.querySelector('[name="usersMessage"]').value;
  console.log(userName)
  console.log(userEmail)
  console.log(usersMessage)

  // Display the submitted message in the messages section
  const messageSection = document.getElementById("messages")
  const messageList = messageSection.querySelector('ul')
  const newMessage = document.createElement('li')
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a><span>${usersMessage}</span>`;

  // Add a remove button to each message
  let removeButton = document.createElement('button')
  removeButton.innerText = "remove"
  removeButton.type = "button"
  removeButton.addEventListener('click', (event) => {
    let entry = event.target.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.append(newMessage);

  // Reset the form after submission
  event.target.reset()
})

// Fetch GitHub repositories using XMLHttpRequest
var githubRequest = new XMLHttpRequest();
var githubUsername = "darialevinson";
var url = `https://api.github.com/users/${githubUsername}/repos`;
githubRequest.open('GET', url);
githubRequest.send()

// Handle the response and display GitHub projects
githubRequest.onload = function() {
  if (githubRequest.status === 200) {
    var repositories = JSON.parse(githubRequest.responseText);
    var projectSection = document.getElementById('projects');
    var projectList = projectSection.querySelector('div');

    // Create a div for each project and populate it with project details
    var projectList = document.createElement('div');
    for (var i = 0; i < repositories.length; i++) {
      var projectDiv = document.createElement('div');
      projectDiv.classList.add('project');

      var projectName = document.createElement('h3');
      projectName.innerText = repositories[i].name;

      var projectDescription = document.createElement('p');
      projectDescription.innerText = repositories[i].description || 'No description provided';

      var viewButton = document.createElement('a');
      viewButton.innerText = 'View Project';
      viewButton.href = repositories[i].html_url;
      viewButton.classList.add('view-button');

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(viewButton);

      projectList.appendChild(projectDiv);
    }

    var projectsSection = document.getElementById('projects');
    projectsSection.appendChild(projectList);
  }
}

// Fetch GitHub repositories using Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(repositories => {
    // Display GitHub projects using the Fetch API
    var projectSection = document.getElementById('projects');
    var projectList = projectSection.querySelector('div');

    var projectList = document.createElement('div');

    for (var i = 0; i < repositories.length; i++) {
      var projectDiv = document.createElement('div');
      projectDiv.classList.add('project');

      var projectName = document.createElement('h3');
      projectName.innerText = repositories[i].name;

      var projectDescription = document.createElement('p');
      projectDescription.innerText = repositories[i].description || 'No description provided';

      var viewButton = document.createElement('a');
      viewButton.innerText = 'View Project';
      viewButton.href = repositories[i].html_url;
      viewButton.classList.add('view-button');

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(viewButton);

      projectList.appendChild(projectDiv);
    }

    var projectsSection = document.getElementById('projects');
    projectsSection.appendChild(projectList);
  })
  .catch(error => console.error('Error fetching data:', error));
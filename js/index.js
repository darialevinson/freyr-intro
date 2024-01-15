let today = new Date()
    let thisYear = today.getFullYear()
console.log(today)
let footer = document.querySelector('footer')
let copyright = document.createElement('p')
let yourName = "Daria"
copyright.innerHTML = `${yourName} ${thisYear}`
footer.appendChild(copyright)

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');

  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
  });
});


let skills = [ 'HTML','CSS', 'JavaScript','Frameworks', 'React']

let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for ( let i = 0; i < skills.length; i++){
    let skill = document.createElement('li')
     skill.innerText = skills[i]
     skillsList.appendChild(skill)
    
}

let messageForm = document.getElementById("leave_message")
messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const usersMessage = event.target.querySelector('[name="usersMessage"]').value;
    console.log(userName)
    console.log(userEmail)
    console.log(usersMessage)

    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a><span>${usersMessage}</span>`;

    let removeButton = document.createElement('button')
    removeButton.innerText = "remove"
    removeButton.type = "button"
    removeButton.addEventListener('click', (event) => {
        let entry = event.target.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    event.target.reset()
})

var githubRequest = new XMLHttpRequest();
var githubUsername = "darialevinson"; 

var url = `https://api.github.com/users/${githubUsername}/repos`;
githubRequest.open('GET', url);
githubRequest.send()

githubRequest.onload = function() {
    if (githubRequest.status === 200) {
      var repositories = JSON.parse(githubRequest.responseText);
  
      
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
projectsSection.appendChild(projectList);}}
let githubUsername = "darialevinson";
let url = `https://api.github.com/users/${githubUsername}/repos`;

// Using Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(repositories => {
    
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
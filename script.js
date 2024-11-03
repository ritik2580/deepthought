const projectData = {
  "_id": { "$oid": "63b64dc9e3b230ebb60a495d" },
  "category": "Course",
  "commitment": "4 hours",
  "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>",
  "tasks": [
    {
      "task_id": 18882,
      "task_title": "Explore the world of management",
      "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
      "assets": [
        {
          "asset_id": 18883,
          "asset_title": "Technical Project Management",
          "asset_description": "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8", // Ensure this is the correct link
          "asset_content_type": "video"
        },
        // Additional assets...
      ]
    }
  ],
  "title": "Technical Project Management"
};

document.getElementById('project-title').innerText = projectData.title;
document.getElementById('project-description').innerHTML = projectData.description;

// Display tasks and assets
const tasksContainer = document.getElementById('tasks-container');
projectData.tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <h4>${task.task_title}</h4>
        <p>${task.task_description}</p>
        <div class="assets">
            ${task.assets.map(asset => `
                <div class="asset">
                    <h5>${asset.asset_title}</h5>
                    <p>${asset.asset_description}</p>
                    ${asset.asset_content_type === "video" ? 
                        `<iframe src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>` : 
                        `<input type="text" placeholder="Your input here..." />`}
                </div>
            `).join('')}
        </div>
    `;
    tasksContainer.appendChild(taskDiv);
});

const detailsDiv = document.createElement('div');
detailsDiv.className = 'details';
detailsDiv.innerHTML = `
    <textarea placeholder="Add your notes here..."></textarea>
    <button class="toggle-details">Show/Hide Details</button>
`;

taskDiv.appendChild(detailsDiv);
taskDiv.querySelector('.toggle-details').addEventListener('click', () => {
    detailsDiv.style.display = detailsDiv.style.display === 'block' ? 'none' : 'block';
});

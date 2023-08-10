const dataProject = [];

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;
  let javascript = document.getElementById("javascript");
  let php = document.getElementById("php");
  let golang = document.getElementById("golang");
  let java = document.getElementById("java");
  let image = document.getElementById("image").files;

  if (projectName == "") {
    return alert("Project Name diperlukan!");
  } else if (startDate == "" || endDate == "") {
    return alert("Start Date & End Date diperlukan!");
  } else if (description == "") {
    return alert("Description diperlukan!");
  } else if (
    javascript.checked == false &&
    php.checked == false &&
    golang.checked == false &&
    java.checked == false
  ) {
    return alert("Technologies diperlukan setidaknya satu!");
  } else if (image.length == 0) {
    return alert("Image diperlukan!");
  }

  image = URL.createObjectURL(image[0]);

  let project = {
    projectName,
    startDate,
    endDate,
    description,
    technologies: {
      javascript: javascript.checked ? javascript.value : null,
      java: java.checked ? java.value : null,
      golang: golang.checked ? golang.value : null,
      php: php.checked ? php.value : null,
    },
    image,
  };

  dataProject.push(project);

  renderProject();
});

function renderProject() {
  document.querySelector(".project-card-container").innerHTML = "";

  for (let i = 0; i < dataProject.length; i++) {
    document.querySelector(".project-card-container").innerHTML += `
      <div class="project-card">
        <img class="project-image" src="${dataProject[i].image}" alt="Project ${
      i + 1
    } Image" width="100%">
        <h3 class="project-title"><a href="./projectdetail.html">${
          dataProject[i].projectName
        }</a></h3>
        <small class="project-duration">Durasi: ${dataProject[i].startDate} - ${
      dataProject[i].endDate
    }</small>
        <p class="project-description">
          ${dataProject[i].description}
        </p>
        <div class="project-technologies">
          ${
            dataProject[i].technologies.javascript
              ? `<i class="fa-brands fa-square-js"></i>`
              : ""
          }
          ${
            dataProject[i].technologies.golang
              ? `<i class="fa-brands fa-golang"></i>`
              : ""
          }
          ${
            dataProject[i].technologies.php
              ? `<i class="fa-brands fa-php"></i>`
              : ""
          }
          ${
            dataProject[i].technologies.java
              ? `<i class="fa-brands fa-java"></i>`
              : ""
          }
        </div>
        <div class="project-actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    `;
  }
}

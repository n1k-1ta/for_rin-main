function loadPosts() {
  const postAccordion = document.getElementById("postAccordion");
  postAccordion.innerHTML = "";

  

  fetch("http://localhost:3000/api/articles")
      .then(async (response) => {
          const posts = await response.json();
          posts.forEach((post, index) => {

  let postElement = document.createElement("div");
  postElement.classList.add("accordion-item");

  let header = document.createElement("h2");
  header.classList.add("accordion-header");

  let button = document.createElement("button");
  button.classList.add("accordion-button", "collapsed");
  button.type = "button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", "#postCollapse" + index);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "postCollapse" + index);
  button.textContent = post.title;

  let body = document.createElement("div");
  body.classList.add("accordion-collapse", "collapse");
  body.id = "postCollapse" + index;
  body.setAttribute("aria-labelledby", "postHeading" + index);
  body.setAttribute("data-bs-parent", "#postAccordion");

  let bodyContent = document.createElement("div");
  bodyContent.classList.add("accordion-body");
  bodyContent.textContent = post.body;

  header.appendChild(button);
  body.appendChild(bodyContent);
  postElement.appendChild(header);
  postElement.appendChild(body);
  postAccordion.appendChild(postElement);
  

});
      })
      .catch((error) => {
          console.error("Ошибка при загрузке постов:", error);
      });
}



  loadPosts();
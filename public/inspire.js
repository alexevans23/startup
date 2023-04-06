// Select the form element
const form = document.querySelector("form");

// WebSocket connection
const ws = new WebSocket("ws://your.domain.com:4000/api/inspire");

ws.onopen = () => {
  console.log("WebSocket connection opened.");
};

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  addPost(message.title, message.content, message.image);
};

// Function to add a new post to the page
function addPost(title, content, imageSrc) {
  // Create a new post element and add it to the page
  const postElement = document.createElement("div");
  postElement.classList.add("card", "my-3");
  postElement.innerHTML = `
    <img src="${imageSrc}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
    </div>
  `;
  document.querySelector("#postContainer").appendChild(postElement);
}

// Add an event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  const title = document.querySelector("#postTitle").value;
  const content = document.querySelector("#postContent").value;
  const image = document.querySelector("#postImage").files[0];

  // Create a new FormData object
  const formData = new FormData();

  // Append the form field values to the FormData object
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  // Send the post data through WebSocket
  ws.send(JSON.stringify({ title, content, image }));
});


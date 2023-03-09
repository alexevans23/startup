// Array to hold all the submitted posts
let posts = [];

// DOM elements
const postContainer = document.getElementById("postContainer");
const postForm = document.querySelector("form");
const postTitleInput = document.getElementById("postTitle");
const postContentInput = document.getElementById("postContent");

// Function to add a new post to the array and display it on the page
function addPost(title, content) {
  // Create a new post object and add it to the array
  const post = { title: title, content: content };
  posts.push(post);

  // Create a new post element and add it to the page
  const postElement = document.createElement("div");
  postElement.classList.add("card", "my-3");
  postElement.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${content}</p>
    </div>
  `;
  postContainer.appendChild(postElement);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page from reloading

  // Get the values from the form inputs
  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();

  // Add the post to the array and display it on the page
  addPost(title, content);

  // Reset the form inputs
  postTitleInput.value = "";
  postContentInput.value = "";
}

// Event listener for form submission
postForm.addEventListener("submit", handleSubmit);
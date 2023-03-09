// Define variables to store HTML elements
const postTitleInput = document.getElementById('postTitle');
const postContentInput = document.getElementById('postContent');
const postForm = document.querySelector('form');
const postList = document.getElementById('postList');

// Define a variable to keep track of the ID for the next post
let nextPostId = 1;

// Define an array to store all the posts
const posts = [];

// Define a function to add a post to the page
function addPostToPage(post) {
  // Create HTML elements for the post title and content
  const titleElement = document.createElement('h3');
  const contentElement = document.createElement('p');

  // Set the text of the title and content elements to the post title and content
  titleElement.textContent = post.title;
  contentElement.textContent = post.content;

  // Create a container div for the post elements
  const postElement = document.createElement('div');
  postElement.classList.add('my-5');

  // Add the title and content elements to the container div
  postElement.appendChild(titleElement);
  postElement.appendChild(contentElement);

  // Add the container div to the post list
  postList.appendChild(postElement);
}

// Define a function to handle form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form inputs
  const postTitle = postTitleInput.value;
  const postContent = postContentInput.value;

  // Create a new post object with the values and the next ID
  const post = {
    id: nextPostId,
    title: postTitle,
    content: postContent,
  };

  // Add the post to the array and increment the next ID
  posts.push(post);
  nextPostId++;

  // Clear the form inputs
  postTitleInput.value = '';
  postContentInput.value = '';

  // Add the new post to the page
  addPostToPage(post);
}

// Add a submit event listener to the form
postForm.addEventListener('submit', handleFormSubmit);
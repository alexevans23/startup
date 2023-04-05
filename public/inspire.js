// Select the form element
const form = document.querySelector("form");

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

  // Send a POST request to the server
  fetch("/api/inspire", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Reload the page if the request was successful
        location.reload();
      } else {
        // Display an error message if the request failed
        alert("Error submitting post");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Error submitting post");
    });
});

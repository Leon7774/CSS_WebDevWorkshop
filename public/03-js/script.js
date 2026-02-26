// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the button element
  const connectBtn = document.getElementById("connect-btn");

  // Select the title element to animate
  const jobTitle = document.getElementById("job-title");

  // Add click event listener to the button
  connectBtn.addEventListener("click", () => {
    // Toggle the 'connected' state
    const isConnected = connectBtn.classList.contains("btn-connected");

    if (isConnected) {
      // Revert to initial state
      connectBtn.textContent = "Connect";
      connectBtn.classList.remove("btn-connected");
      connectBtn.classList.add("btn-primary");
    } else {
      // Change to connected state
      connectBtn.textContent = "Connected";
      connectBtn.classList.remove("btn-primary");
      connectBtn.classList.add("btn-connected");

      // Add a little confetti effect or log to console
      console.log("You are now connected with Jane Doe!");

      // Simple animation
      jobTitle.style.transform = "scale(1.1)";
      setTimeout(() => {
        jobTitle.style.transform = "scale(1)";
      }, 200);
    }
  });
});

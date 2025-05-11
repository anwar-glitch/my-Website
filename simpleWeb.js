document.addEventListener("DOMContentLoaded", () => {
   const tabs = document.querySelectorAll(".tab-button");
   const forms = document.querySelectorAll(".form");

   tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
         // Remove active class from all tabs and forms
         tabs.forEach((t) => t.classList.remove("active"));
         forms.forEach((form) => form.classList.remove("active"));

         // Add active class to the clicked tab and corresponding form
         tab.classList.add("active");
         document.getElementById(`${tab.dataset.tab}-form`).classList.add("active");
      });
   });

   const form = document.querySelector("#signup-form");
   const newPassword = document.getElementById("newpassword");
   const confirmPassword = document.getElementById("confpassword");

   form.addEventListener("submit", (event) => {
      // Clear previous error messages
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((msg) => msg.remove());

      // Validate passwords
      if (newPassword.value !== confirmPassword.value) {
         event.preventDefault(); // Prevent form submission
         showError(confirmPassword, "Passwords do not match");
      }
   });

   function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error-message";
      error.style.color = "red";
      error.style.fontSize = "14px";
      error.style.marginTop = "5px";
      error.textContent = message;
      input.parentElement.appendChild(error);
   }
});
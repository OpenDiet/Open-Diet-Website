document.addEventListener("DOMContentLoaded", function () {
  // Initial state is hidden
  let mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display = "none";

  document
    .getElementById("mobile-nav-button")
    .addEventListener("click", function () {
      // Toggle visibility
      if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
    });
});

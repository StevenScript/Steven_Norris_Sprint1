// Function to show the appropriate section based on hash
function showSectionFromHash() {
  const hash = window.location.hash.substring(1); // Get hash from URL without the #
  if (hash) {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });
    const targetSection = document.getElementById(hash);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  }
}

// Event listener for navigation links
document.querySelectorAll(".footerbuttontext").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent default behavior
    e.preventDefault();

    // Remove 'active' class from all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });

    // Add 'active' class to the target section
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update the URL hash
    window.location.hash = targetId;
  });
});

// Show the correct section on page load based on URL hash
window.addEventListener("DOMContentLoaded", showSectionFromHash);

document.querySelectorAll(".navbarbuttontext").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent default behavior
    e.preventDefault();

    // Remove 'active' class from all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });

    // Add 'active' class to the target section
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update the URL hash
    window.location.hash = targetId;
  });
});

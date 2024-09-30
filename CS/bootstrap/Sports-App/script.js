// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Genius can add more JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded Successfully.");
});

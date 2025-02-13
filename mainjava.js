window.onload = function () {
    console.log("JavaScript is running!"); // Debugging step

    const dropdown = document.getElementById("categories");

    // Check if dropdown exists before running the script
    if (!dropdown) {
        console.error("Dropdown element not found! Check your HTML.");
        return;
    }

    const paragraphs = document.querySelectorAll(".main-text");

    function updateText() {
        const selectedValue = dropdown.value;
        console.log("Selected:", selectedValue); // Debugging step

        paragraphs.forEach(p => {
            p.style.display = p.dataset.category === selectedValue ? "block" : "none";
        });
    }

    dropdown.addEventListener("change", updateText);
    updateText(); // Run once on page load to set the correct display
};
window.onload = function () {
    console.log("JavaScript is running!"); 

    const dropdown = document.getElementById("categories");
    const paragraphs = document.querySelectorAll(".article");

    function updateText() {
        const selectedValue = dropdown.value;
        console.log("Selected:", selectedValue); 
        paragraphs.forEach(p => {
            p.style.display = p.dataset.category === selectedValue ? "block" : "none";
        });
    }

    dropdown.addEventListener("change", updateText);
    updateText();
};

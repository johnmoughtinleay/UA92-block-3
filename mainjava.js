window.onload = function () {
    console.log("JavaScript is running!"); 

    const dropdown = document.getElementById("categories");
    const paragraphs = document.querySelectorAll(".col-md-4, .col-md-2");

    function updateText() {
        const selectedValue = dropdown.value;
        console.log("Selected:", selectedValue); 
        paragraphs.forEach(p => {
            p.style.display = p.dataset.category === selectedValue ? "block" : "none";
        });
    }
    console.log("test")


    dropdown.addEventListener("change", updateText);
    dropdown.addEventListener("click", getUsername)
    getUsername()
    updateText()
};

function getUsername() {
    console.log("test")
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let userdisplayname = document.getElementById("userdisplayname");
        
    if (username === "Username" && password === "Password") {
        userdisplayname.innerText = username;
        userdisplayname.style.display = "block";
        console.log("logedin")
    } else {
        userdisplayname.innerText = "";
        userdisplayname.style.display = "none";
    }
}

function updateHashDisplay() {
    const selectedHash = window.location.hash || 'None';
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => div.style.display = 'none');

    const hashContent = document.getElementById(selectedHash.slice(1));
    if (hashContent) {
        hashContent.style.display = 'block';
    } else {
        document.getElementById('none').style.display = 'block';
    }
}

window.addEventListener('hashchange', updateHashDisplay);

updateHashDisplay();

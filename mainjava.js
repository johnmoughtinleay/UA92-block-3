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

    dropdown.addEventListener("change", updateText);
    updateText()
};

function getUsername() {
    let username = document.getElementById("Username").value; /*gets entered username and password*/
    let password = document.getElementById("Password").value;
    let userdisplayname = document.getElementById("userdisplayname");
        
    if (username === "Username" && password === "Password") { /*checks if username and password are correct*/
        userdisplayname.innerText = username;
        userdisplayname.style.display = "block";
        console.log("logedin")
    } else {
        userdisplayname.innerText = "not signed in"; /*sets the text within userdisplayname to "notsigned in"*/
    }
}

/*function updateHashDisplay() {
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

updateHashDisplay();*/



    function generatepreview() {
        let previewtext = document.getElementById("bloginput").value;
        let previewimage = document.getElementById("imageinput").files[0];
        console.log("Button clicked!");

        document.getElementById("previewtextbox").innerText = previewtext;

        if (previewimage) {
            let reader = new FileReader();

            reader.onload = function(e) {

                document.getElementById("previewimagecontainer").src = e.target.result;
            };

            reader.readAsDataURL(previewimage);
        } else {
            console.log("No image file selected.");
        }
    }


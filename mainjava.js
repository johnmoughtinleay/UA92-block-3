window.onload = function () { /*runs function when website loads*/
    console.log("JavaScript is running!"); 

    const dropdown = document.getElementById("categories"); /*gets dropdown element*/
    const paragraphs = document.querySelectorAll(".col-md-4, .col-md-2"); /*gets all elements with class col-md-4 or col-md-2*/

    function updateText() { /*displays articles with the same data catogory as selected value*/
        const selectedValue = dropdown.value;
        console.log("Selected:", selectedValue); 
        paragraphs.forEach(p => { /*loops through every element in paragraphs*/
            p.style.display = p.dataset.category === selectedValue ? "block" : "none"; /*shows elemment if it's data catorgory matches selected value*/
        });
    }

    dropdown.addEventListener("change", updateText); /*adds a listener, when catorgory changes, update text is ran again*/
    updateText() /*runs function to display correct blogs*/
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


    function generatepreview() { /*displays inputed image and text*/
        let previewtext = document.getElementById("bloginput").value;/*gets inputed elements*/
        let previewimage = document.getElementById("imageinput").files[0];
        console.log("Button clicked!");

        document.getElementById("previewtextbox").innerText = previewtext; /*sets the text of preview text to the inputed text*/

        if (previewimage) { /*checks if there was a file inputed*/
            let reader = new FileReader();

            reader.onload = function(e) {

                document.getElementById("previewimagecontainer").src = e.target.result; /*displays the image*/
            };

            reader.readAsDataURL(previewimage);
        } else {
            console.log("No image file selected."); /*displays No image file selected if no file was entered*/
        }
    }


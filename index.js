
const title = document.querySelector(".identification");
title.classList.add("highlight-title");


document.querySelector(".btn").addEventListener("click", function() {
    const introSection = document.querySelector(".intro");
    introSection.style.backgroundColor = "#e0f7fa";  
});


const toggleImageButton = document.createElement("button");
toggleImageButton.textContent = "Afficher/Masquer la photo";
document.querySelector(".btn-box").appendChild(toggleImageButton);

toggleImageButton.addEventListener("click", function() {
    const profileImage = document.querySelector(".portfolioimg");
    if (profileImage.style.display === "none") {
        profileImage.style.display = "block";
    } else {
        profileImage.style.display = "none";
    }
});

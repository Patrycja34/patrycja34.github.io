
const academicProjectText = document.querySelector(".projet-analyse .contenu-texte");
const moreInfoButton = document.createElement("button");
moreInfoButton.textContent = "Voir plus de détails";
document.querySelector(".projet-analyse").appendChild(moreInfoButton);

moreInfoButton.addEventListener("click", function() {
    academicProjectText.innerHTML += "<p>Ce projet m'a également permis de développer des compétences en analyse des tendances de marché et en communication interculturelle.</p>";
    moreInfoButton.style.display = "none"; 
});

const bikeImage = document.querySelector("img[alt='Bike']");
bikeImage.addEventListener("mouseover", function() {
    bikeImage.src = "new-bike43-image.jpg"; 
});
bikeImage.addEventListener("mouseout", function() {
    bikeImage.src = "bike43.webp"; 
});


const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.classList.add("visible");
        }
    });
});

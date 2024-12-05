
const softSkills = document.querySelectorAll("#soft-skills li");
softSkills.forEach(skill => {
    const moreInfo = document.createElement("button");
    moreInfo.textContent = "Voir plus";
    skill.appendChild(moreInfo);

    moreInfo.addEventListener("click", () => {
        const paragraph = skill.querySelector("p");
        paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
        moreInfo.textContent = paragraph.style.display === "none" ? "Voir plus" : "Voir moins";
    });
});


const technicalSkills = document.querySelectorAll(".skill-category ul li");
technicalSkills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.color = "#0044cc";  // Change la couleur au survol
        skill.style.fontWeight = "bold"; 
    });
    skill.addEventListener("mouseout", () => {
        skill.style.color = "";  // Réinitialise la couleur
        skill.style.fontWeight = ""; // Réinitialise le poids de police
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const languageSkills = [
        { language: "Français", level: 100 },
        { language: "Polonais", level: 100 },
        { language: "Anglais", level: 75 },
        { language: "Néerlandais", level: 50 }
    ];

    const languageSection = document.getElementById("language-skills");
    languageSkills.forEach(skill => {
        const skillContainer = document.createElement("div");
        skillContainer.classList.add("progress-container");

        const label = document.createElement("span");
        label.textContent = `${skill.language} :`;
        skillContainer.appendChild(label);

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = "0%"; //  vide
        skillContainer.appendChild(progressBar);

        languageSection.appendChild(skillContainer);

        // Animation de la barre de progression
        setTimeout(() => {
            progressBar.style.width = skill.level + "%";
        }, 500);
    });
});

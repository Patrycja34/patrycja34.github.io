
const educationSection = document.querySelector(".education");
educationSection.addEventListener("mouseover", function() {
    educationSection.style.backgroundColor = "#f1f8e9"; 
});
educationSection.addEventListener("mouseout", function() {
    educationSection.style.backgroundColor = ""; 
});


const ichecImage = document.querySelector("img[alt='ichec']");
ichecImage.addEventListener("click", function() {
    ichecImage.src = "new-ichec-image.jpg"; 
});


const currentProgramText = document.querySelector("#current-program p");
const addTextButton = document.createElement("button");
addTextButton.textContent = "Plus de détails";
document.querySelector("#current-program").appendChild(addTextButton);

addTextButton.addEventListener("click", function() {
    currentProgramText.textContent += " En tant qu'étudiante en alternance, j'acquiers chaque jour de nouvelles compétences directement applicables dans un environnement professionnel.";
});

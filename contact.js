
document.getElementById("name").value = "Votre Nom ici";


document.querySelector(".btn-box .btn").addEventListener("click", function (event) {
    event.preventDefault();
    const btnBox = document.querySelector(".btn-box");
    if (btnBox) {
        btnBox.remove();
        alert("Le lien LinkedIn a été supprimé !");
    }
});


document.getElementById("message").addEventListener("input", function () {
    const form = document.querySelector(".contact-form");
    if (form) {
        form.style.backgroundColor = "#f0f8ff";
    }
});
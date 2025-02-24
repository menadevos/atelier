document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Récupération des valeurs
    const civilite = document.getElementById("civilite").value;
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const adresse = document.getElementById("adresse").value;
    const email = document.getElementById("email").value;
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const telephone = document.getElementById("telephone").value;
    const pays = document.getElementById("pays").value;

    
    document.querySelectorAll(".error").forEach(e => e.textContent = "");


    if (civilite === "") { document.getElementById("civiliteError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (nom === "") { document.getElementById("nomError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (prenom === "") { document.getElementById("prenomError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (adresse === "") { document.getElementById("adresseError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (email === "" || !emailRegex.test(email)) { document.getElementById("emailError").textContent = "Email invalide."; isValid = false; }
    if (login === "") { document.getElementById("loginError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (password === "") { document.getElementById("passwordError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (confirmPassword === "") { document.getElementById("confirmPasswordError").textContent = "Ce champ est obligatoire."; isValid = false; }
    if (password !== confirmPassword) { document.getElementById("confirmPasswordError").textContent = "Les mots de passe ne correspondent pas."; isValid = false; }
    if (telephone === "" || !phoneRegex.test(telephone)) { document.getElementById("telephoneError").textContent = "Numéro de téléphone invalide."; isValid = false; }
    if (pays === "") { document.getElementById("paysError").textContent = "Ce champ est obligatoire."; isValid = false; }

    
    if (isValid) {
        alert("Inscription reussie !");
        this.submit();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const validusername = "Usuario"; // Reemplaza con el usuario válido
    const validpassword = "python 444"; // Reemplaza con la contraseña válida
    
    const desktopLoginForm = document.getElementById("desktopLoginForm");
    const desktopMessage = document.getElementById("desktopMessage");

    desktopLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = desktopLoginForm.desktopUsername.value;
        const password = desktopLoginForm.desktopPassword.value;

        if (username === validusername && password === validpassword) {
            desktopMessage.textContent = "Inicio de sesión exitoso";
            window.location.href = "https://nextcloudpublic.duckdns.org/nextcloud/index.php/";
        } else {
            desktopMessage.textContent = "Credenciales incorrectas";
        }
    });

    const mobileLoginForm = document.getElementById("mobileLoginForm");
    const mobileMessage = document.getElementById("mobileMessage");

    mobileLoginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = mobileLoginForm.mobileUsername.value;
        const password = mobileLoginForm.mobilePassword.value;

        if (username === validusername && password === validpassword) {
            mobileMessage.textContent = "Inicio de sesión exitoso";
            window.location.href = "https://nextcloudpublic.duckdns.org/nextcloud/index.php/";
        } else {
            mobileMessage.textContent = "Credenciales incorrectas";
        }
    });
});




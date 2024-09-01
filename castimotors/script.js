function toggleMenu() {
    var menuContainer = document.querySelector('.nav__li-container');
    menuContainer.classList.toggle('visible');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value;
        });

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById('result-container').innerHTML = '<p>Mensaje enviado con éxito. Gracias por contactarnos.</p>';
                // Agrega una alerta después de mostrar el mensaje de éxito
                alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
            } else {
                document.getElementById('result-container').innerHTML = '<p>Error al enviar el mensaje. Inténtelo nuevamente más tarde.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result-container').innerHTML = '<p>Error al enviar el mensaje. Inténtelo nuevamente más tarde.</p>';
        });
    });
});


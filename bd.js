document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario tradicional

    // Recolecta los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envía los datos a Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbxr4KUZl1bzGbCzKkOK7VPMHxwDcnsmbwH3NaxWJnCDimcMlq4JoS-0VqBlkqvtqZbGAw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('¡Formulario enviado con éxito!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
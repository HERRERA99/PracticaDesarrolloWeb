document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos referencias a los elementos del DOM
    var mensajeElement = document.getElementById('mensaje');
    var cambiarMensajeButton = document.getElementById('btnCambiaMsg');

    // Agregamos un evento de clic al botón
    cambiarMensajeButton.addEventListener('click', function() {
        // Cambiamos el contenido del elemento mensaje
        mensajeElement.textContent = '¡Mensaje cambiado con JavaScript!';
    });
});

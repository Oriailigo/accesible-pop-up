function mostrarPopup() {
    var popup = document.getElementById('miPopup');
    var overlay = document.getElementById('overlay');

    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Establecer el foco en el primer elemento al mostrar el pop-up
    popup.focus();
}

function cerrarPopup() {
    var popup = document.getElementById('miPopup');
    var overlay = document.getElementById('overlay');
    var btn = document.getElementById('btn');

    popup.style.display = 'none';
    overlay.style.display = 'none';

    btn.focus();
}

function navegarTeclado(event) {
    var popup = document.getElementById('miPopup');
    var elementos = popup.querySelectorAll('[tabindex="0"]');
    var primerElemento = elementos[0];
    var ultimoElemento = elementos[elementos.length - 1];

    if (event.key === 'Tab' && !event.shiftKey) {
        // Avanzar al siguiente elemento
        if (document.activeElement === ultimoElemento) {
            primerElemento.focus();
            event.preventDefault();
        }
    } else if (event.key === 'Tab' && event.shiftKey) {
        // Retroceder al elemento anterior
        if (document.activeElement === primerElemento) {
            ultimoElemento.focus();
            event.preventDefault();
        }
    } else if (event.key === 'Escape') {
        // Cerrar el pop-up al presionar Escape
        cerrarPopup();
    }
}

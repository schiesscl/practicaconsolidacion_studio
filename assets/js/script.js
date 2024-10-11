//Activar Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Establece el ancho de cada barra de progreso
const habilidades = [
    { id: 'skill-html', valor: 80 },
    { id: 'skill-css', valor: 75 },
    { id: 'skill-bootstrap', valor: 70 },
    { id: 'skill-javascript', valor : 70 },
    { id: 'skill-jquery', valor: 60 },
    { id: 'skill-mysql', valor: 75 },
    { id: 'skill-java', valor: 60 },
    { id: 'skill-springboot', valor: 65 },
    { id: 'skill-maven', valor: 65 }
];

// Función para animar las barras de progreso
function animateProgress() {
    habilidades.forEach((habilidad) => {
        const progressBar = document.getElementById(habilidad.id);
        let width = 0;
        const interval = setInterval(() => {
            width += 1;
            progressBar.style.width = `${width}%`;
            if (width >= habilidad.valor) {
                clearInterval(interval);
            }
        }, 10);
    });
}

// Llama a la función para animar las barras de progreso cuando se carga la página
window.onload = animateProgress;

// Capturar formulario
const formContacto = $("#form-contacto");

// Capturar el contenedor donde se mostrará el mensaje de confirmación
const mensajeConfirmacion = $("<p id='mensaje-confirmacion' style='color: green; font-weight: bold;'></p>");

// Agregar el contenedor del mensaje de confirmación debajo del formulario
formContacto.after(mensajeConfirmacion);

$("#form-contacto").submit(function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = $("#contacto-nombre").val();
    var asunto = $("#contacto-asunto").val();
    var correo = $("#contacto-correo").val();
    var mensaje = $("#contacto-mensaje").val();

    // Obtener el idioma de la página
    var idioma = document.documentElement.lang;

    // Verificar la longitud de los campos
    if (nombre.length < 8) {
        var mensajeError = (idioma == "es") ? "El nombre debe tener al menos 8 caracteres." : "The name must be at least 8 characters long.";
        var tituloError = (idioma == "es") ? "Error" : "Error";
        $("#modalContacto .modal-title").text(tituloError);
        $("#modalContacto .modal-body").text(mensajeError);
        $("#modalContacto").modal("show");
        return;
    }

    if (asunto.length < 8) {
        var mensajeError = (idioma == "es") ? "El asunto debe tener al menos 8 caracteres." : "The subject must be at least 8 characters long.";
        var tituloError = (idioma == "es") ? "Error" : "Error";
        $("#modalContacto .modal-title").text(tituloError);
        $("#modalContacto .modal-body").text(mensajeError);
        $("#modalContacto").modal("show");
        return;
    }

    if (mensaje.length < 15) {
        var mensajeError = (idioma == "es") ? "El mensaje debe tener al menos 15 caracteres." : "The message must be at least 15 characters long.";
        var tituloError = (idioma == "es") ? "Error" : "Error";
        $("#modalContacto .modal-title").text(tituloError);
        $("#modalContacto .modal-body").text(mensajeError);
        $("#modalContacto").modal("show");
        return;
    }

    // Mostrar mensaje de confirmación en el modal
    var mensajeConfirmacionTexto = (idioma == "es") ? "Gracias! te contactaremos a la brevedad." : "Thank you! I will contact you soon.";
    var tituloConfirmacion = (idioma == "es") ? "Mensaje Enviado" : "Message Sent";
    $("#modalContacto .modal-title").text(tituloConfirmacion);
    $("#modalContacto .modal-body").text(mensajeConfirmacionTexto);
    $("#modalContacto").modal("show");

    // Limpiar el formulario
    $(this)[0].reset();
});
//Activar Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Establece el ancho de cada barra de progreso
const habilidades = [
    { id: 'skill-html', valor: 85 },
    { id: 'skill-css', valor: 80 },
    { id: 'skill-bootstrap', valor: 75 },
    { id: 'skill-javascript', valor : 70 },
    { id: 'skill-jquery', valor: 65 },
    { id: 'skill-mysql', valor: 75 },
    { id: 'skill-java', valor: 60 },
    { id: 'skill-springboot', valor: 65 },
    { id: 'skill-maven', valor: 65 },
    { id: 'skill-nodejs', valor: 55 },
    { id: 'skill-expressjs', valor: 55 },
    { id: 'skill-postgresql', valor: 65 },
    { id: 'skill-python', valor: 50 },
    { id: 'skill-react', valor: 35 }
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

// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {
    // Capturar formulario
    const formContacto = $("#form-contacto");

    // Validación del formulario
    $("#form-contacto").submit(function(event) {
        var nombre = $("#contacto-nombre").val();
        var asunto = $("#contacto-asunto").val();
        var mensaje = $("#contacto-mensaje").val();
        
        // Validación básica
        if (nombre.length < 8 || asunto.length < 8 || mensaje.length < 15) {
            event.preventDefault();
            alert("Por favor revisa los campos:\n- Nombre: mínimo 8 caracteres\n- Asunto: mínimo 8 caracteres\n- Mensaje: mínimo 15 caracteres");
            return false;
        }
        return true;
    });
});
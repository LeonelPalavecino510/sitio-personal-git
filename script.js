/*Con el formulario en el sitio personal como estudiante de la facultad. Configurar los  inputs del mismo para darles un estilo igual a cada uno (puede ser color, pseudoclases, etc.), definir los id o clases para su programación en JavaScript para la validación del formulario.  
Programar una función con JavaScript que Muestre un mensaje cuando el usuario toque el botón de enviar el formulario.   
Si los datos no fueron completados o son erroneos (ejemplo; no ingresa un email válido), debe dar un mensaje de error con la información a corregir.
En caso de haber completado bien el formulario. Debe presentar un mensaje que diga gracias por su contacto (Nombre de la persona que escribió ) y el texto que diga "en breve le estaré respondiendo".
*/
// ejercicio 2 //
document.addEventListener("DOMContentLoaded", function (formulario) {
    const formulario = document.getElementById("formulario");
    // Escucha evento
    formulario.addEventListener("button", function (formulario) {
    alert("Formulario enviado correctamente.");
    });
});

// ejercicio 3 //
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    alert(`Gracias por su contacto, ${nombre}. En breve le estaré respondiendo.`);
    return true;
}


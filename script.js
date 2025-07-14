document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();

  let mensaje = 'Por favor completá los siguientes campos:\n';

  if (nombre === '') mensaje += '- Nombre\n';
  if (apellido === '') mensaje += '- Apellido\n';
  if (email === '') mensaje += '- Correo electrónico\n';

  // Si falta alguno, mostrar alerta
  if (nombre === '' || apellido === '' || email === '') {
    alert(mensaje);
    return;
  }

  // Si está todo bien
  alert(`¡Gracias por tu contacto, ${nombre} ${apellido}!`);
  this.reset();
});
const form = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();

  if (usuario === 'diego' && clave === '123') {
    errorDiv.style.display = 'none';
    form.querySelector('button').textContent = '¡Entrando!';
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  } else {
    errorDiv.textContent = 'Usuario o contraseña incorrectos 😱';
    errorDiv.style.display = 'block';
    form.classList.remove('shake');
    void form.offsetWidth; // trigger reflow for animation
    form.classList.add('shake');
  }
});
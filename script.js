// Formulario
document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    vehiculo: document.getElementById('vehiculo').value,
    recibe: document.getElementById('recibe').value,
    entrega: document.getElementById('entrega').value,
    tipo: document.getElementById('tipo').value,
    tiempo: document.getElementById('tiempo').value,
    fecha: document.getElementById('fecha').value
  };

  console.log('Datos enviados:', data);
  alert('¡Registro guardado correctamente!');
  this.reset();
});

// Carrusel
const slides = document.querySelectorAll('.carousel-slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

showSlide(current);

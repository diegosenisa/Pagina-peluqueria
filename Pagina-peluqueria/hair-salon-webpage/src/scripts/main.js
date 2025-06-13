// File: /hair-salon-webpage/hair-salon-webpage/src/scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Example of an event listener for a button click
    const bookButton = document.getElementById('book-appointment');
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            alert('Appointment booked! We will contact you shortly.');
        });
    }

    // Form validation example
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Image slider functionality (placeholder for future implementation)
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Initialize the first image
    showImage(currentIndex);

    const servicios = [
      {
        nombre: "Corte Clásico",
        precio: 1500,
        desc: "Corte tradicional para todas las edades.",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Corte Moderno",
        precio: 2500,
        desc: "Estilos modernos y personalizados.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Coloración",
        precio: 3500,
        desc: "Tintura profesional, incluye lavado y brushing.",
        img: "https://images.unsplash.com/photo-1519415943484-cfbdfb486052?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Peinado Fiesta",
        precio: 3000,
        desc: "Peinados para eventos especiales.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Barbería",
        precio: 1800,
        desc: "Afeitado y arreglo de barba.",
        img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Alisado",
        precio: 5000,
        desc: "Alisado definitivo con productos premium.",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Reflejos",
        precio: 4000,
        desc: "Reflejos naturales o fantasía.",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
      },
      {
        nombre: "Tratamiento Capilar",
        precio: 2200,
        desc: "Nutrición y reparación profunda.",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80"
      }
    ];

    const listaServicios = document.getElementById('lista-servicios');
    const precioInput = document.getElementById('precio');
    const precioValor = document.getElementById('precio-valor');

    function renderServicios(maxPrecio) {
      listaServicios.innerHTML = '';
      servicios
        .filter(s => s.precio <= maxPrecio)
        .forEach(s => {
          const card = document.createElement('div');
          card.className = 'servicio-card';
          card.innerHTML = `
            <img src="${s.img}" alt="${s.nombre}">
            <h3>${s.nombre}</h3>
            <div class="precio">$${s.precio}</div>
            <div class="desc">${s.desc}</div>
          `;
          listaServicios.appendChild(card);
        });
    }

    precioInput.addEventListener('input', () => {
      precioValor.textContent = precioInput.value;
      renderServicios(Number(precioInput.value));
    });

    // Inicializar
    renderServicios(Number(precioInput.value));
});

// Public directory path (for reference or future use)
// C:\Users\dsenisa\Desktop\Cosas diego\enseñando mateo\hair-salon-webpage\public
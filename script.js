// Importa TweenMax desde GSAP (asegúrate de incluir GSAP en tu proyecto)
// Puedes hacerlo descargándolo o usando un CDN.
// <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
    // Animación de título
    const title = document.querySelector("h1");
    TweenMax.from(title, 1, { opacity: 0, y: -50, ease: Power2.easeOut });
  
    // Animación de texto principal
    const mainText = document.querySelector("p");
    TweenMax.from(mainText, 1, { opacity: 0, y: 50, delay: 0.5, ease: Power2.easeOut });
  
    // Animación de la línea de tiempo
    const events = document.querySelectorAll(".event");
    events.forEach((event, index) => {
      TweenMax.from(event, 1, { opacity: 0, x: (index % 2 === 0) ? -50 : 50, delay: 0.1 * index, ease: Power2.easeOut });
    });
  
    // Animación de imágenes
    const images = document.querySelectorAll(".image-container img");
    images.forEach((img, index) => {
      TweenMax.from(img, 1, { opacity: 0, scale: 0, delay: 0.2 * index, ease: Elastic.easeOut.config(1, 0.5) });
    });
  
    // Evento de clic divertido
    title.addEventListener("click", function () {
      TweenMax.to(title, 0.5, { rotation: 360, scale: 1.2, ease: Power2.easeInOut, onComplete: resetTitle });
    });
  
    // Función para resetear el título después de la animación de clic
    function resetTitle() {
      TweenMax.to(title, 0.5, { rotation: 0, scale: 1, ease: Power2.easeInOut });
    }
  });
  
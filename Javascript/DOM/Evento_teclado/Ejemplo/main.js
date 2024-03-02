// aremos que el batman se meuva con las teclas 

document.addEventListener('DOMContentLoaded', function() {
    var movible = document.getElementById('movible');
    var posicionTop = 0;
    var posicionLeft = 0;
    var paso = 10; // Cantidad de píxeles para mover el div en cada paso

    document.addEventListener('keydown', function(event) {
      switch(event.key) {
        case 'ArrowUp':
          posicionTop -= paso;
          break;
        case 'ArrowDown':
          posicionTop += paso;
          break;
        case 'ArrowLeft':
          posicionLeft -= paso;
          break;
        case 'ArrowRight':
          posicionLeft += paso;
          break;
      }

      // Actualizamos la posición del div
      movible.style.top = posicionTop + 'px';
      movible.style.left = posicionLeft + 'px';
    });
  });
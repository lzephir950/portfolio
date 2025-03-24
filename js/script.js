document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.slide-paragraph');
    
    // Crée l'observer avec IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          paragraph.classList.add('active'); // Ajoute la classe active quand visible
        }
      });
    }, {
      threshold: 0.1 // L'élément devient visible quand 10% de sa hauteur entre dans la vue
    });
  
    // Observer l'élément
    observer.observe(paragraph);
  });



  /* ------------------------- */
/* Version en JavaScript pur */
/* ------------------------- */
"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});
// -------------------
function animate_text() 
{
  let delay = 100,
      delay_start = 0,
      contents,
      letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {

        elem.textContent += letter;

      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}

// Ouvrir le popup
document.getElementById('open-popup').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('popup').style.display = 'block';
});

// Fermer le popup
document.querySelector('.close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Fermer le popup si l'utilisateur clique en dehors de la boîte
window.addEventListener('click', function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = 'none';
  }
});

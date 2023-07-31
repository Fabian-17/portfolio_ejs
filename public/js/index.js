let text = "SobreMi";
let i = 0;
let interval;

function showLetter() {
    let letter = document.getElementById("letter-" + (i + 1));
    if (letter == null) {
      clearInterval(interval);
      return;
    }
  
    letter.style.opacity = 1; // Establecemos la opacidad en 1
    letter.innerHTML = text.charAt(i);
    i++;
  }
  
  window.onload = function() {
    let letters = document.querySelectorAll("span"); // Obtenemos todas las letras
    letters.forEach(function(letter) {
      letter.style.opacity = 0; // Establecemos la opacidad inicial en 0
    });
  
    interval = setInterval(showLetter, 800);
  };

document.addEventListener("DOMContentLoaded", function(){
       contarCaracteres();
       contarPalabras();
       palabrasRepetidas();
});

//Variables que reutilizare reiteradas veces:
var principalText = document.getElementById('texto-entrada');
var respuesta = document.getElementById('resultados');

//Funcion que cuenta letras
function contarCaracteres(){
       var cantidad = principalText.innerText.length;

       var p = document.createElement ('p');
       var strong = document.createElement('strong');
       var span = document.createElement("span");

       strong.innerHTML = "Letra:";
       p.append(strong);

       span.innerHTML = cantidad;
       p.append(span);

       respuesta.appendChild(p);
};

//Funcion cuenta palabras
function contarPalabras(){
       var clean = /\s+/gi;
       var palabras = principalText.innerText.replace(clean, ' ').split(' ').length;

       var p = document.createElement ('p');
       var strong = document.createElement('strong');
       var span = document.createElement("span");

       strong.innerHTML = "Palabras:";
       p.append(strong);

       span.innerHTML = palabras;
       p.append(span);

       respuesta.appendChild(p);
};

//Funcion cuenta palabras y cuantas veces se repiten
function palabrasRepetidas(){
       var clean = /[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g;
       var palabras = principalText.innerText.replace(clean, ' ').split(' ');

       var repetidas = {}

       //Esto de arriba me regresa un hash llave: valor, donde la llave es la palabra y el valor la cantidad de veces que se repite.
       palabras.forEach(function(palabra){
              repetidas[palabra] = (repetidas[palabra] || 0) + 1;
       });

       /*Este metodo de abajo me da el siguiente error: 
              Uncaught TypeError: repetidas.forEach is not a function
              at palabrasRepetidas (index.js:57)
              at HTMLDocument.<anonymous> (index.js:4)
       No se de que otra forma recorrerlo para mostrarlo :( 
       */
       repetidas.forEach(function(palabra, numero){
              var p = document.createElement ('p');
              var strong = document.createElement('strong');
              var span = document.createElement("span");

              strong.innerHTML = `Palabra ${palabra},`;
              p.append(strong);

              span.innerHTML = `cantidad de veces que se repitio: ${numero} `;
              p.append(span);

              respuesta.appendChild(p);
       });
};


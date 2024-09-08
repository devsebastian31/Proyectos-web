function toggleMenu() { 
    // Define una función llamada toggleMenu, que se encargará de mostrar u ocultar un menú.

    var menuContainer = document.querySelector('.nav__li-container'); 
    // Busca el primer elemento del DOM que tenga la clase 'nav__li-container' y lo almacena en la variable 'menuContainer'.

    menuContainer.classList.toggle('visible'); 
    // Alterna la clase 'visible' en el elemento 'menuContainer'. Si la clase 'visible' está presente, la elimina; si no, la agrega.
}



function toggleRedes() { 
    // Define una función llamada toggleRedes, que se encargará de mostrar u ocultar una sección de redes sociales.

    var redes = document.getElementById("redes"); 
    // Busca el elemento del DOM con el ID 'redes' y lo almacena en la variable 'redes'.

    if (redes.style.display === "block") { 
        // Comprueba si el estilo de display del elemento 'redes' es igual a 'block', lo que indica que está visible.

        redes.style.display = "none"; 
        // Si 'redes' está visible, cambia el estilo de display a 'none', ocultándolo.
    } else { 
        // Si 'redes' no está visible (display no es 'block').

        redes.style.display = "block"; 
        // Cambia el estilo de display a 'block', mostrando el elemento 'redes'.
    }
}



// Espera a que el contenido del DOM se haya cargado completamente antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
  // Define un objeto con sugerencias y sus URLs correspondientes.
  // La clave es el texto de la sugerencia y el valor es la URL a la que se redirige.
  const suggestions = {
      'Inyección con Sqlmap': 'https://bl4ck44.github.io/Articles/Sqlmap.html', // URL para la sugerencia 'Inyección con Sqlmap'
      'Análisis con Bettercap': 'https://bl4ck44.github.io/Articles/Bettercap.html', // URL para la sugerencia 'Análisis con Bettercap'
      'Análisis con dirsearch': 'https://bl4ck44.github.io/Articles/dirsearch.html', // URL para la sugerencia 'Análisis con dirsearch'
      'Herramientas para escaneo de vulnerabilidades': 'https://bl4ck44.github.io/Articles/pentesting.html', // URL para la sugerencia 'Herramientas para escaneo de vulnerabilidades'
  };

  // Obtiene el elemento de la barra de búsqueda del DOM por su ID.
  const searchBar = document.getElementById('search-bar');
  
  // Obtiene el elemento de la lista de sugerencias del DOM por su ID.
  const suggestionsList = document.getElementById('suggestions');

  // Añade un listener de evento para detectar cambios en el campo de búsqueda.
  searchBar.addEventListener('input', function() {
      // Obtiene el valor actual del campo de búsqueda y lo convierte a minúsculas.
      const query = searchBar.value.toLowerCase();
      
      // Limpia la lista de sugerencias anterior para mostrar las nuevas sugerencias.
      suggestionsList.innerHTML = '';

      // Verifica si el campo de búsqueda no está vacío.
      if (query) {
          // Filtra las sugerencias basadas en si el texto de la sugerencia incluye la consulta.
          const filteredSuggestions = Object.keys(suggestions).filter(item => item.toLowerCase().includes(query));

          // Verifica si hay sugerencias filtradas.
          if (filteredSuggestions.length > 0) {
              // Muestra la lista de sugerencias.
              suggestionsList.style.display = 'block';

              // Recorre cada sugerencia filtrada y crea un elemento de lista para cada una.
              filteredSuggestions.forEach(suggestion => {
                  // Crea un nuevo elemento de lista.
                  const listItem = document.createElement('li');
                  
                  // Establece el texto del elemento de lista con la sugerencia.
                  listItem.textContent = suggestion;
                  
                  // Añade un listener de evento para manejar el clic en la sugerencia.
                  listItem.addEventListener('click', () => {
                      // Redirige al usuario a la URL correspondiente a la sugerencia seleccionada.
                      window.location.href = suggestions[suggestion];
                      
                      // Limpia la lista de sugerencias después del clic.
                      suggestionsList.innerHTML = '';
                      
                      // Limpia el campo de búsqueda.
                      searchBar.value = '';
                  });

                  // Añade el elemento de lista a la lista de sugerencias.
                  suggestionsList.appendChild(listItem);
              });
          } else {
              // Oculta la lista de sugerencias si no hay coincidencias.
              suggestionsList.style.display = 'none';
          }
      } else {
          // Oculta la lista de sugerencias si el campo de búsqueda está vacío.
          suggestionsList.style.display = 'none';
      }
  });

  // Añade un listener de evento para cerrar la lista de sugerencias al hacer clic fuera de ella.
  document.addEventListener('click', function(event) {
      // Verifica si el clic ocurrió fuera del campo de búsqueda y la lista de sugerencias.
      if (!searchBar.contains(event.target) && !suggestionsList.contains(event.target)) {
          // Oculta la lista de sugerencias si se hace clic fuera de ella.
          suggestionsList.style.display = 'none';
      }
  });
});






  
// popover
//var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//  return new bootstrap.Popover(popoverTriggerEl);
//});
//
//// Gender Select
//if (window.location.pathname === "/") {
//  const radioBtn1 = document.querySelector("#flexRadioDefault1");
//  const radioBtn2 = document.querySelector("#flexRadioDefault2");
//  const radioBtn3 = document.querySelector("#flexRadioDefault3");
//  const genderSelect = document.querySelector("#genderSelect");
//
//  radioBtn1.addEventListener("change", () => {
//    genderSelect.classList.add("d-none");
//  });
//  radioBtn2.addEventListener("change", () => {
//    genderSelect.classList.add("d-none");
//  });
//  radioBtn3.addEventListener("change", () => {
//    genderSelect.classList.remove("d-none");
//  });
//}
//


// Supongamos que estos son los servicios para cada categoría
var services = {
  cat1: ["Servicio 1.1", "Servicio 1.2", "Servicio 1.3"],
  cat2: ["Servicio 2.1", "Servicio 2.2", "Servicio 2.3"],
  cat3: ["Servicio 3.1", "Servicio 3.2", "Servicio 3.3"],
  cat4: ["Servicio 4.1", "Servicio 4.2", "Servicio 4.3"],
  cat5: ["Servicio 5.1", "Servicio 5.2", "Servicio 5.3"]
};

function loadServices(category) {
  // Obtén el selector de servicios
  var serviceSelector = document.getElementById("service");

  // Limpia las opciones existentes
  serviceSelector.innerHTML = "<option value=''>Selecciona un servicio</option>";

  // Carga los servicios para la categoría seleccionada
  if (category in services) {
    for (var i = 0; i < services[category].length; i++) {
      var option = document.createElement("option");
      option.value = services[category][i];
      option.text = services[category][i];
      serviceSelector.add(option);
    }
  }
}

type = "text/javascript" >
  function showTodos() {
    document.getElementById('content').innerHTML = 'Aquí se muestra el contenido de "Todos".';
  }

function showEnCurso() {
  document.getElementById('content').innerHTML = 'Aquí se muestra el contenido de "En curso".';
}


// Tu objeto y función de bot van aquí
var bot = {
  "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
  "adios": "¡Hasta luego! Que tengas un buen día.",
};

function handleUserInput(userInput) {
  var command = userInput.toLowerCase();
  if (command in bot) {
    return bot[command];
  } else {
    return "Lo siento, no entiendo ese comando.";
  }
}

// EventListener para el botón de envío
document.getElementById('sendButton').addEventListener('click', function() {
  // Captura la entrada del usuario
  var userInput = document.getElementById('userInput').value;
  
  // Usa la entrada del usuario con la función handleUserInput()
  var botResponse = handleUserInput(userInput);
  
  // Agrega la entrada del usuario y la respuesta del bot al registro de chat
  var chatLog = document.getElementById('chatLog');
  chatLog.innerHTML += 'Usuario: ' + userInput + '<br>';
  chatLog.innerHTML += 'Bot: ' + botResponse + '<br>';
  
  // Limpia el campo de entrada
  document.getElementById('userInput').value = '';
});


function mostrarSeccion() {
  // Seleccionar la sección con la clase "info-cuenta"
  var seccion = document.querySelector(".info-cuenta");

  // Mostrar la sección seleccionada
  seccion.style.display = 'block';
}

function ocultarSeccion() {
  // Seleccionar la sección con la clase "info-cuenta"
  var seccion = document.querySelector(".info-cuenta");

  // Ocultar la sección seleccionada
  seccion.style.display = 'none';
}


function mostrarSeccion() {
  // Seleccionar la sección con la clase "info-cuenta" y el fondo oscuro
  var seccion = document.querySelector(".info-cuenta");
  var fondoOscuro = document.querySelector(".fondo-oscuro");

  // Mostrar la sección seleccionada y el fondo oscuro
  seccion.style.display = 'block';
  fondoOscuro.style.display = 'block';
}

function ocultarSeccion() {
  // Seleccionar la sección con la clase "info-cuenta" y el fondo oscuro
  var seccion = document.querySelector(".info-cuenta");
  var fondoOscuro = document.querySelector(".fondo-oscuro");

  // Ocultar la sección seleccionada y el fondo oscuro
  seccion.style.display = 'none';
  fondoOscuro.style.display = 'none';
}
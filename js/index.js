// Mesas disponibles inicialmente
let mesasDisponibles = [
  { nombre: 'mesa 1', capacidad: 9 },
  { nombre: 'mesa 2', capacidad: 12 },
  { nombre: 'mesa 3', capacidad: 9 },
  { nombre: 'mesa 4', capacidad: 12 }
];

alert("PROGRAMA DE GESTIÓN DE RESERVAS");

// Mostrar el estado actual de las mesas disponibles
function mostrarEstadoMesas() {
  alert("Estado actual de las mesas disponibles:");
  mesasDisponibles.forEach(mesa => {
    alert(`${mesa.nombre} - Lugares disponibles: ${mesa.capacidad}`);
  });
}

// Función para solicitar al usuario la elección de la mesa
function preguntaMesa() {
  let mesaSolicitada;
  do {
    mesaSolicitada = parseInt(prompt("¿En qué mesa le gustaría reservar?\n- 1\n- 2\n- 3\n- 4"));
    if (mesaSolicitada < 1 || mesaSolicitada > 4 || isNaN(mesaSolicitada)) {
      alert("Por favor, ingrese un número de mesa válido (1 a 4).");
    }
  } while (mesaSolicitada < 1 || mesaSolicitada > 4 || isNaN(mesaSolicitada));
  return mesaSolicitada;
}

// Función para preguntar al usuario la cantidad de lugares necesarios
function preguntaLugares() {
  let cantidadSolicitada;
  do {
    cantidadSolicitada = parseInt(prompt("¿Cuántos lugares necesita?"));
    if (cantidadSolicitada <= 0 || isNaN(cantidadSolicitada)) {
      alert("Por favor, ingrese un número válido mayor a 0.");
    }
  } while (cantidadSolicitada <= 0 || isNaN(cantidadSolicitada));
  return cantidadSolicitada;
}

// Función de bienvenida al programa
function bienvenida() {
  let nombre = prompt("Por favor, ingrese su nombre: ");
  alert(`Hola ${nombre}, vamos a ver si hay lugares disponibles en la mesa que desea.`);
}

// Función para verificar la disponibilidad de la mesa seleccionada
function disponibilidad(cantidadSolicitada, mesaSolicitada) {
  let mesaSeleccionada = mesasDisponibles.find(mesa => mesa.nombre === `mesa ${mesaSolicitada}`);
  
  if (mesaSeleccionada && mesaSeleccionada.capacidad >= cantidadSolicitada) {
    alert(`Su reserva ha sido realizada con éxito. Hay suficientes lugares disponibles en la ${mesaSeleccionada.nombre}.`);
    mesaSeleccionada.capacidad -= cantidadSolicitada;
  } else {
    alert(`Lo sentimos, no hay suficientes lugares en la mesa ${mesaSolicitada}.`);
  }
}

// Función para preguntar si el usuario desea realizar otra reserva
function preguntarOtraReserva() {
  let respuesta = prompt("¿Desea realizar otra reserva? (Sí/No)").toLowerCase();
  return respuesta === "sí" || respuesta === "si";
}

// Inicia el programa
mostrarEstadoMesas();
bienvenida();
let seguirConsultando = true;

while (seguirConsultando) {
  let mesaElegida = preguntaMesa();
  let lugaresNecesarios = preguntaLugares();
  disponibilidad(lugaresNecesarios, mesaElegida);
  mostrarEstadoMesas();
  seguirConsultando = preguntarOtraReserva();
}

alert("Gracias por usar nuestro servicio de consulta de disponibilidad de mesas.");

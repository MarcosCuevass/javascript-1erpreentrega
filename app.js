let valorInicial = 0;
let fechaLimite = 0;

prompts();
function prompts() {
  valorInicial = prompt("Ingrese el valor del prestamo (Maximo: 5000)");
  fechaLimite = prompt("Escriba su fecha limite (limite una semana)");
}

while (valorInicial >= 5000) {
  if (valorInicial >= 5000) alert("No disponemos de ese capital");
  // if (fechaLimite >= 7) alert("No te hagas el boludo");
  prompts();
}

const interes = calcularInteres();

document.write(
  `<h1>Tu prestamo es de 
    <span style="color: khaki">$ ${parseInt(valorInicial)}</span>.
  </h1> <br/>
  <h2>Debe devolver el dinero en ${fechaLimite} días</h2> <br/>
  <h2>El interés a pagar es de $ ${
    interes - parseInt(valorInicial)
  } quedando un total de $ ${interes}</h2>
  `
);

function calcularInteres() {
  let porcentaje;

  // fechaLimite >= 7 ? porcentaje = 15 : porcentaje = 12;

  if (fechaLimite >= 7) {
    // porcentaje = 12 * ;
    console.log(fechaLimite - 12);
  } else {
    porcentaje = 12;
  }

  return Math.round(
    parseInt(valorInicial) + (porcentaje / 100) * parseInt(valorInicial)
  );
}

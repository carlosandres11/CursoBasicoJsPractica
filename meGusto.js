//Método para generar pregunta utilizando una función y condición//

let num = 10;
let num2 = 10;

const result = num + num2;

let question = {
  q1: `Cuánto es ${num} + ${num2}?`,
};

function quizzer() {
  let userInput = prompt(question.q1);
  if (userInput == result) {
    alert("Felicitaciones tu respuesta es correcta.");
  } else {
    alert("Lo siento haz marca una respuesta inválida.");
  }
}

//Manda llamar un listado + la suma de números//
let articulos = [
  "Marcador",
  "Sacapuntas",
  "Lapiz",
  "Esfero",
  "Borrador",
  "Papel",
];
function llamar(reemplazoDelArray) {
  for (var i = 0; i < articulos.length; i++) {
    console.log(`${i + 1} ` + reemplazoDelArray[i]);
  }
}

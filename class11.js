const h1 = document.querySelector("h1");
const input1 = document.querySelector("#Calculo1");
const input2 = document.querySelector("#Calculo2");
const btn = document.querySelector("#btnCalcular");
const respuesta = document.querySelector("#pResult");
const form = document.querySelector("#formXD");

form.addEventListener("submit", submitclick);
// btn.addEventListener("click", submitclick);

function submitclick(event) {
  console.log({ event });
  event.preventDefault();
  const sumatoria = input1.value + input2.value;
  respuesta.innerHTML = "Este es el Resultado: " + sumatoria;
}

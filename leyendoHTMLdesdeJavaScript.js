const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
h1.innerHTML = "Patito <br> Feo";

console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "verde");//

h1.classList.add("rojo2");
h1.classList.remove("platzilg");
//h1.classList.toggle("platzilg");// para eventos de js, dependiendo de la clase, se la quitemos o agregemos cada vez que ejecutemos toggle
//h1.classList.contains("platzilg");// especie de condicional, nos devuelve true o false, si nuestro elemento contiene la clase que l estemos preguntado

input.value = "456";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://quo.eldiario.es/wp-content/uploads/2019/10/descubren-una-extrana-fuerza-en-el-vacio.jpg"
);
console.log(img);

pid.innerHTML = "";
pid.append(img);

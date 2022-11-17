# ¿Qué es una variable y para que sirve?

R// Espacios en memoria donde podemos guardar información o tipos de datos:
Strings, Números, Carácteres, Booleanos, funciones. (Dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

# ¿Cuál es la diferencia entre declara e inizializar una variable?

R// Declarar es cuándo le decimos a JavaScript que vamos a crear una variable de tal nombre. Mientras que inicilizar (o reinicilizar) es cuando le asignamos un nombre a esa variable.

# ¿Cuál es la diferencia entre sumar números y concatenar strings?

# ¿Cuál operador me permite sumar o concatenar?

R//El operador que nos permite sumar o concatenar es +. Cuando lo utilizamos con números realiza una suma entre los números. pero cuándo lo utilizamos con strings concatena o une esos Strings.

# ¿Determina el nombre y tipo de dato para almacenar en variable la siguiente información?

R//

- Nombre: string
- Apellido: string
- Nombre Usuario: string
- Edad: number
- Correo elétronico: string
- Mayor de edad: booleano
- Dinero ahorrado: number
- Deudas: number

let nombre = "Carlos";
let apellido = "Gomez";
let username = "carlosandres";
let edad = "24";
let mail = "abc@asdf.xyz";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

let nombrecompleto = nombre + " " + apellido;

let dineroTotal = dineroAhorrado - deudas;

# ¿Qué es una función?

R// Las funciones nos permiten encapsular bloques de código para reutilizarlos y ejecutarlos en el futuro.

<function nombreCompleto(name, lastname){
return name + " " + lastname
}>

nombreCompleto(nombre, apellido)

# ¿Cuándo me sirve usar una función en mi código?

R// Nos sirve cuando tenemos variables de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro.

También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

# ¿Cuál es la diferencia entre parámetros y argumentos de una función?

R// Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

# Convierte el siguiente código en una función, pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
cosnt completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludo(name, lastname, username){
const completeName = nombreCompleto(name, lastname);
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}
saludo(Carlos, Gomez, Carlitos)

# ¿Que es un condicional?

R// Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

# ¿Cuáles son sus diferencias?

R// El condicional if (con else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los casos se comparan con la misma variable o condicón que definamos en el switch.

# ¿Qué es un ciclo?

La ejecutación de un bloque de código hasta que se cumpla cierta condición.

# ¿Qué tipos de ciclos exiten en JavaScript?

while, for, do while, terciario.

while: Relaiza primero una validación antes de ejecutar nuestro bloque de código.
do while: Pasa lo mismo con este, pero la primera vez no pregunta, primero ejecuta el código luego hace la validación y dependiendo de esa validación vuelve a ejecutar el ciclo y así.
for: automaticamente nos obliga a definir que pasa al principio y al final de cada ejecución de código en nuestro ciclo.

Nuestro while hace una validación y luego tenemos nuestro bloque de código, pero no está obligado a cambiar la validación para que pare nuestro ciclo.

# ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando nuestra validación, condición para terminar de ejecutar nuestro ciclos nunca se cumple, por lo tanto los ciclos se siguen y se siguen ejecutando hasta que nuestro navegador se totee.

//R:Es cuando la validación de nuestros condicionales nunca se cumple, se termina toteando la aplicación.

# ¿Puedo mezclar ciclos y condicionales?

Los ciclos de por si con una especie de condicinal ya se va estar ejecutando hasta que ese condicional falle. Pero tener un condicional ahí (que nos ayude a parar la ejecución de nuestro código) No nos impide tener otros condicionales.

Supongamos que queremos ejecutar algo cuándo nuestro número sea par o cuándo nuestro número no sea impar.
Solución dentro de ese condicional agregamos un condicional de <<tipo switch o tipo if >> y ejecutamos lo que necesitemos.

R// Sí, aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro del ciclo.

# Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

<for (let i = 0; i < 5; i++){
console.log('El valor de i es: ' + i);
}>

<let i = 0
while(i < 5){
console.log('El valor de i es: ' + i);
i++;
}>

<for (let i = 10; i >= 2; i--) {
console.log('El valor de i es: ' + i);
}>

<let i = 10
while(i >= 2){
console.log('El valor de i es: ' + i);
i--;
}>

El valor de i tiene que cambiar para que rompa el ciclo, tiene que sumarse o restarse.

# Escribe un código en JavaScript que le permita a los ususarios cuánto es '2 + 2'. Si responden bien, mostramos un aviso de felicitaciones, pero si responden mal, volvemos a empezar.

```js
let respuesta;

while (respuesta != "4") {
  let pregunta = prompt("¿Cuánto es 2 + 2?");
  respuesta = pregunta;
}
```

prompt: Todas las respuestas que escriban los usuarios en el aviso de prompt se guardara en esa variable.

Para que si se ejecute este bucle una y otra vez, la respuesta debe ser incorrecta.
Si respuesta es diferente a 4.

```js
const onjectSuscriptions = {
  free:'Puedes ver todos los cursos gratuitos',
  general:'Comienza a aprender con más de 50 cursos que tenemos listos para tí',
  expert:'Cuentas con más de 350 cursos listos para iniciar, además invita a un amigo tuyo a este plan',
  expertduo:'¡Qué esperas! Hay más de 600 cursos disponibles para ti en este momento. ¡Felicidades!'
}

function (){}
```

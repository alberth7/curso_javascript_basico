[Clase 1 ¿Qué es JavaScript?](#clase-1-¿qué-es-javascript)

[Clase 2 ¿Cómo nace Javascript?](#clase-2-¿cómo-nace-javascript)

[Clase 3 Elementos del Lenguaje de Programación](#clase-3-elementos-del-lenguaje-de-programación)

[Clase 4 Qué es una variable en JavaScript](#clase-4-qué-es-una-variable-en-javascript)

[Clase 5 Qué son las funciones en JavaScript](#clase-5-qué-son-las-funciones-en-javascript)

[clase 6 ¿Qué es una función declarativa y una expresiva?](#clase-6-¿qué-es-una-función-declarativa-y-una-expresiva)

[clase 7 Scope](#clase-7-scope)

[Clase 8 Hoisting](#clase-8-hoisting)

[Clase 9 Coerción](#clase-9-coerción)

[Clase 10 Valores: Truthy y Falsy](#clase-10-valores-truthy-y-falsy)

[Clase 11 Operadores: Asignación, Comparación y Aritméticos](#clase-11-operadores-asignación-comparación-y-aritméticos)

[Clase 12 Condicionales: If, Else, else if](#clase-12-condicionales-if-else-else-if)

[Clase 13 Switch](#clase-13-switch)

[Clase 14 ¿Qué es un array?](#clase-14-¿qué-es-un-array)

[Clase 15 Loops: For y For...of](#clase-15-loops-for-y-forof)


## Clase 1 ¿Qué es JavaScript?

Hava Script es un lenguaje de porgramación dinámico que tiene la capacidad de ser utilizado en muchos dispositivos diferentes.  Puede usarse en ordenadores personales, servidores web y teléfonos inteligentes. Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

Esta aplicación se emplea comúnmente para el desarrollo web front-end y más recientemente para algunos desarrollos back-end a través de frameworks como Node.Js. o Next.Js. Tiene características como la programación orientada a objetos, funciones y herencia basada en prototipos.

## Clase 2 ¿Por qué JavaScript?

¿Cómo nace Javascript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros. Fue creado por Brendan Eich en 1995 y se convirtió en un estándar oficial del World Wide Web Consortium (W3C) en 1997.

### Es lenguaje dinámico
Corre directamente en la etapa de Runtime, sin una etapa de compilación previa. Son leguajes que funcionan en el RunTime, por esto es un lenguaje interpretado el navegador lee linea por linea si exite algun error el navegador lo muestra en tiempo de ejecución.

### ES débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).

### Es un lenguaje interpretado
La razón es que el navegador lee línea por línea nuestro código, el cual le indica lo que tiene que ir haciendo, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

### Forwards
Significa si existe una nueva versión y la usas no afectara a la ejecución del programa porque es compatible. JavaScript NO FUNCIONA ASI.

### Backwards
Todos los módulos nuevos que salen con JavaScript no van a romper el código que se tiene echo Pero no lo podemos utilizar en el entorno de trabajo en ese momento. Con Babel puedes utilizar las nuevas versiones.

#### HTML
Sive para maquetar
### CSS
Sirve para dar estilos
### JS
Lenguaje d eprogramación para realizar una pagina dinámica

En 2019, la W3C (World Wide Web Consortium) genera WebAssembly este es un lenguaje de programación nuevo que te permite desarrollar aplicaciones web con otros lenguajes de programación, como C++ o Python.

### Desarrollo Web
Para construir aplicaciones web, existen librerías o frameworks robustos basados en JavaScript. Algunos de estos son: Angular, React o Vue.

## Clase 3 Elementos del Lenguaje de Programación

### Arbol de datos de js

![My Image](/files_readme/arbol_datos_js.png)

#### Tipos primitivos
<ul>
<li>Numerico: number</li>
<li>Cadena: string</li>
<li>Verdadero,falso boolean</li>
<li>vacios, place holder: null undefined</li>
</ul>

Para probar código en el navegador, nos vamos con clic derecho y seleccionar la opcion inspeccinar y buscamos la obcion consola.

typeof: para ver el tipo de dato de una variable

## Clase 4 Qué es una variable en JavaScript

### Variables

Una variable es la representación de un lugar que reservamos en memoria para guardar un valor. El valor puede ser cualquier tipo de dato, inclusive objetos o funciones.

Declaración y asignación de variables en JavaScript
En JavaScript, una variable se crea con la palabra reservada var, seguido del nombre de la variable. Esto se denomina declaración.

```
var nombre;

```

De esta manera, existirá un espacio en memoria que haga referencia a la variable nombre, pero por defecto tendrá un valor undefined.Para guardar un valor en esa variable, se utiliza el símbolo de igual ( =) , seguido del valor. Esto se denomina asignación.

```
var nombre
nombre = "JavaScript";
```

Se puede declarar y asignar en una misma línea, sin repetir el nombre de la variable. A esto se le dice inicializar una variable.

```
var nombre = "JavaScript";
```

NOTA. El punto y coma no es necesario colocar pero por buenas prácticas si, para de esta manera otra persona pueda leer facilmente el código.

En java script se tienen tres tipos de varibles para declarar.

* var: declaracion de majera global, utilizan las versiones antiguas de javascript, era la forma que se declaraba hasta ECMAScript 5, 
* let: utlizado comunmente para la declaracion de varibles dinamicos.
* const: variales que no de pueden cambiar de valor, valores estaticos.


## Clase 5 Qué son las funciones en JavaScript
```
// Decalrativas
function myFuction(){
    return 7;
}

// Expresión
// llamada tambien como funciones anonimas
var myFuction2 = function(a, b){
   return a + b; 
}
```

### clase 6 ¿Qué es una función declarativa y una expresiva?

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar('Alberth');
```

Expresión de función:
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Alberth');
```


Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.


## Clase 7 Scope

El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.

Imagina que pierdes algo importante (llaves, dinero, celular), comienzas a buscar este objeto por los lugares más cercanos en que te encuentras; si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

Si haces referencia a una variable, el motor de JavaScript buscará su declaración en el entorno más cercano, y seguirá buscando en entornos más lejanos hasta llegar a la línea de código que la variable esté declarada, pero no en viceversa. A este proceso se lo denomina cadena de scope (scope chaining).

Scope Global:
Variables declaradas en el programa principal no pueden urlizart las variables declaradas dentro de una función.

Scope Local:
Son variales que estan dentro de la función y pueden utilizar las variables globales.

### Qué es el scope global
Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones. El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.

## Clase 8 Hoisting

Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

Hoisting en variables declaradas con var
Mira el siguiente código, ¿qué crees que sea el resultado del console.log?

```
console.log(nombre) // undefined
var nombre = "Andres" 
```
La respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

Lo que JavaScript está haciendo sería lo siguiente:
```
// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"
```

Aquí el nombre de Hoisting o elevación.

### Hoisting en funciones
Mira el siguiente código, ¿qué crees que sea el resultado del console.log?
```
console.log( saludar() )

function saludar() {
  return "Hola"
}
```
La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.
```
// Hoisting: Declara la función antes de ser invocada
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
```

Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

Buenas prácticas
El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se recomienda declarar las variables y las funciones lo más arriba posible del código, para evitar errores.

También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.

## Clase 9 Coerción

La coerción consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

### Qué es la coerción implícita
La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.

Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.

Algunos de los ejemplos de coerción implícita son los siguientes:

```
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false
```

### coerción explícita
La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.

```
Number("47") // 47
String(51) // "51"
Boolean(1) // true
```


## clase 10 Valores: Truthy y Falsy

Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

Qué son los valores falsy
Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.


```
// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false
```
También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.

```
// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false
```

### Qué son los valores truthy
Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.

```
// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
```

Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.


```
Boolean([]) // true
Boolean({}) // true
```

## Clase 11 Operadores: Asignación, Comparación y Aritméticos

Para realizar operaciones en JavaScript es necesario conocer los diferentes tipos de operadores que necesitarás. Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

Qué son los operadores aritméticos
Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:


```
// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
```
Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.

### operador de residuo
El operador de residuo ( % ), el signo de porcentaje, devuelve el residuo de una división.

```
//Residuo
21 % 5 // 1
```

### operador de concatenación
El operador de concatenación consiste en unir dos o más strings.

```
"Hola" + "Platzi" // "Hola Platzi"
```

El operador de concatenación es semejando al operador de suma, pero no es el mismo. Si utilizas este operador con diferentes tipos de datos, JavaScript ejecutará una coerción implícita.


### Cómo utilizar el operador de incremento y decremento

El operador de incremento (++) y decremento (--) consiste en aumentar o disminuir una unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y después de la variable.


```
variable++
variable--
++variable
--variable
```

Sin embargo, si se emplea antes o después, el comportamiento es diferente. Si está previamente, el valor de la variable aumenta y devuelve el valor actual. Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.
```
var a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4
```

### operadores de asignación

En la clase de variables aprendiste un operador de asignación (=). Este operador es diferente a los operadores de igualdad (== y ===).

El operador de asignación (=) consiste en asignar un valor a una variable.

```
var saludo = "Hola Mundo"
```

### Operadores de asignación combinada
En ciertos casos, reasignarás la misma variable más otro valor. Estas variables pueden utilizarse como acumuladores o contadores.
```
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3
```

Una forma para evitar estar repitiendo la variable en la reasignación, es combinarlas con los operadores aritméticos antes del operador de asignación.

```
Tipo	                        Operador	Forma larga
Asignación de suma	            a += b	    a = a + b
Asignación de resta	            a -= b	    a = a - b
Asignación de multiplicación	a *= b	    a = a * b
Asignación de div	a /= b	    a = a / b
```


### Ejercicio de operadores de asignación
Observa el siguiente código, ¿cuál será el resultador del console.log?

```
var contador = 1

contador += 2
contador -= 1
contador *= 5
contador /= 2

console.log(contador)
```

La respuesta es 5. ¿Tienes la misma respuesta?

### operadores de comparación

Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

### operadores de igualdad
Existen dos tipos de igualdad:

* Igualdad por valor (==): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.

* Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.
```
//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true
```

En conclusión, siempre utiliza la comparación por valor y tipo de dato para evitar errores. Los operadores de igualdad son diferentes al operador de asignación (=).

### operadores de desigualdad
Igualmente que los operadores de igualdad, existen dos tipos:

Desigualdad por valor (!=)
Desigualdad por valor y tipo de dato (!==)

```
//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false
```

### operadores de mayor o menor
Los operadores de mayor o menor evalúan intervalos, dependiendo si el valor especificado está incluido o no incluido.

```
// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true
```

### operadores lógicos
Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

### operador disyunción lógico
El operador de disyunción o AND (&&) devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

```
Expresión 1	Expresión 2	1 && 2
true	true	true
true	false	false
false	true	false
false	false	false
```

Por ejemplo, si queremos saber si un número está entre 10 y 20. Es decir, un número que es mayor o igual que 10 Y menor o igual que 20.
```
var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false
```
### operador unión lógico
El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero”.

Expresión 1	Expresión 2	1 || 2
true	true	true
true	false	true
false	true	true
false	false	false
Por ejemplo, si queremos saber si un número no está entre 10 y 20. Es decir, un número que es menor o igual que 10 O mayor o igual que 20.

var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true
Qué es el operador negación lógico
El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

Expresión 1	! 1
true	false
false	true
Por ejemplo, si queremos saber si un número no es menor que 0. Es decir, la negación de que un número es menor que 0.

var a = 5

!(a < 0) // true
También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.

## Clase 12 Condicionales: If, Else, else if

Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

Cómo utilizar el condicional if en JavaScript
Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, si mi edad es mayor o igual que 18, puedo conducir.
```
if (edad >= 18){
    console.log("Puedes conducir")
}
```
La palabra reservada else evalúa cuando la expresión del if es falsa, pero no es obligatorio colocarlo. En el ejemplo anterior, la condición contraria del if es la edad menor que 18, entonces no puedes conducir.
```
if (edad >= 18){
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}
```
En otras palabras, si (if) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (else) efectúo otra acción.

### condicionales al programar
JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente. Esto es importante para ordenar las condiciones correctamente y no sobreescribirlas.

```
if (condicion1){
   // Bloque 1
} else if (condicion2){
    // Bloque 2
} else if (condicion3){
   // Bloque 3
} else {
    // Bloque else
}
```

Por ejemplo, un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.

```
var precio = 10 
if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)
} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
} else {
    precio = precio * (1-0.20)
}
```

### Operador ternario
El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

**condicion ? Bloque verdadero : Bloque falso**

Por ejemplo, guardemos en una variable un mensaje si un número es par o impar.

```
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}
esPar(2) // "Es par"
esPar(3) // "No es par"
```

### Ejercicio de condicionales
Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:

Genera las variables correspondientes
Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.
¡Comparte tu trabajo en la sección de aportes!

```
function game(pc, jugador){
    if (pc === jugador){
        console.log("Empate");
    }
    else if ((pc == "papel" && jugador == "piedra" ) || (pc == "piedra" && jugador == "tigera" ) || (pc == "tigera" && jugador == "papel" ) )
    {
        console.log("Gano la PC");
    }
    else{
        console.log("Ganaste");
    }
}

const tickTackToe = ['piedra','papel','tigera'];
const random = Math.floor(Math.random() * tickTackToe.length);
let pc = tickTackToe[random];
let jugador = 'piedra';

console.log(`>>> PC ${pc}`);
console.log(`>>> Tu ${jugador}`)
game(pc, jugador);

```

// abstraccion, encapsulamiento, herencia, polimorfismo

## Clase 13 Switch
La estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

switch (expresion) {}
Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada break para que no vuelva a evaluar otra condición si ya se cumplió.
```
switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }     
}
```
Finalmente, colocamos la condición por defecto con la palabra reservada default que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque else.
```
switch (expresion) {
  case 1: {
    // Bloque 1
    break
  }
  case 2: {
   // Bloque 2
    break
  }
  default: {
    // Bloque por defecto
  }
}
```

Esto se leería de la siguiente manera: evalúa (switch) la variable expresion, en el caso de que sea igual a uno (case 1), entonces ejecuta el bloque 1 y termina (break), en el caso de que sea igual a dos (case 2), entonces ejecuta el bloque 2 y termina (break), si no se cumple ninguna, ejecuta un bloque por defecto (default).

Ejemplo utilizando switch
Por ejemplo, creemos un semáforo.

```
function semaforo(color) {
  switch (color) {
    case "verde": {
      console.log("¡Sigue!")
      break
    }
    case "amarillo": {
      console.log("¡Detente!")
      break
    }
    case "rojo": {
      console.log("¡No puedes avanzar!")
      break
    }
    default: {
      console.log("¡No reconozco ese color! :(")
    }
  }
}

semaforo("verde") //'¡Sigue!'

```

switch
Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.


## Clase 14 ¿Qué es un array?

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

### Qué son los índices
El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

```
var array = [1,2,3,4]
```

Cómo acceder a los elementos del array
Para acceder a los elementos del array se utiliza la siguiente estructura:

* array[índice]
Para saber la cantidad de elementos de un array se utiliza la propiedad length.
```
var array = [1,2,3,4]
var longitud = array.length
console.log(longitud) // 4
```
Ten en cuenta que la posición del elemento es diferente al índice del mismo.

Entonces, para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 **hasta array.length -1.** Si se accede a un índice que no existe, devolverá undefined.
```
var nombres = ["Andres", "Ramiro", "Silvia"]

nombres[0] // "Andres"
nombres[1] // "Ramiro"
nombres[2] // "Silvia"
nombres[3] // undefined
```

### Qué es la mutabilidad en los arrays
La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.

Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:
```
var nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]
```

### métodos de arrays
Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

* push
* unshift
* pop
* shift

### método push
El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
```
var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```
### método unshift
El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
```
var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```
### método pop
El método pop extrae el elemento del final del array original.
```
var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]
```
### método shift
El método shift extrae el elemento del inicio del array original.
```
var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]
```
### método indexOf
El método indexOf muestra el índice del elemento especificado como argumento.
```
var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1
Si el elemento no se encuentra en el array, el método devuelve el valor -1.

var array = [1,2,3,4]
var index = array.indexOf("hola")
console.log(index) // -1
```

## Clase 15 Loops: For y For...of

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

Existen dos tipos de ciclos repetitivos:

* For (para)
* While (mientras)

### ciclo for

Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.

Cómo utilizar el ciclo for
La estructura del ciclo for es la siguiente:
```
for (condición) {
    // Bloque de código
}
```

La condición consta de tres partes:
* Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.

* Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
* Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
Cada una de las partes debe estar separada por un punto y coma ( ;).

Practiquemos el uso del bucle for
Por ejemplo, generemos los números del 1 al 10:

* Inicio: inicializamos una variable con el valor de 1, generalmente se utiliza i (índice) como variable para el bucle, pero no es obligatorio. En este caso usaremos var num = 1.
Condición: La condición será mientras sea menor o igual que 10 (num <= 10),
* Pasos: Debemos aumentar la variable en una unidad, por lo tanto, podemos utilizar num = num +1, num += 1 o num++. Este último únicamente cuando la variable aumente una unidad.

La estructura es la siguiente:
```
for (var num = 1; num <= 10; num++) {
  console.log(i)
}
```

Esto se leería como: “Para (for) la variable num que inicia en 1 (num = 1) mientras sea menor o igual que 10 (num <= 10) en pasos de 1 (num++) ejecuta una o varias instrucciones (console.log)”.

Mira la siguiente tabla que muestra cómo cambia la variable num en cada ciclo.

# Ciclo	num	num <= 10	num++
1.º	1	true	2
2.º	2	true	3
…	…	…	…
10.º	10	true	11
11.º	11	false	Termina el bucle

### recorrer arrays con el ciclo for
En el anterior ejemplo aprendiste a generar números del 1 al 10, utilicemos la misma lógica para recorrer un array.

¿Qué debemos usar para acceder a los elementos de un array? Exactamente, sus índices (variable i). Debemos generar los índices desde 0 hasta length (que no debe estar incluido). Con esto, empleamos la misma variable i para acceder a cada elemento con la sintaxis de corchetes array[i].

La estructura sería siguiente:
```
var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for(var i = 0; i < nombres.length; i++){
    console.log( nombres[i] )
}
```

Qué es un ciclo for … of
El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.

La estructura del ciclo for ... of es la siguiente:
```
for ( var elemento of array){
    //Bloque de código
}
```
La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en el bucle for.
```
var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento) // 5 4 3 2 1
}
```
Por convención, se escribe la variable elemento en singular con respecto al nombre del array. Por ejemplo, si el nombre del array es datos, el nombre de la variable de cada elemento sería dato, y así sucesivamente.

```
for (var dato of datos) { ... }
for (var name of names) { ... }
for (var number of numbers) { ... }
for (var el of elements) { ... }
```

Limitaciones del ciclo for … of
El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

Por ejemplo, si quieres duplicar el valor de cada elemento del array, necesitarás su índice.
```
var numbers = [5, 4, 3, 2, 1]

// No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

//  Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]
```

Sin embargo, esto no es malo, depende del problema que estés afrontando. Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores, de esta manera no cambiará el array original.
```
var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]
```

## Clase 16 Loops: While

Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

### ciclo while
La estructura del ciclo while es la siguiente:
```
while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
```

En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

Generación de números con el bucle while
Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.

La estructura es la siguiente:
```
var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
```

Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.

### Control de variables con el bucle while
Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.

Ejecuta el siguiente código en la terminal de tu navegador, e intenta ingresar un valor incorrecto y observa lo que sucede. Se utiliza la condición contraria a lo que queremos, porque es lo que controlaremos, al cambiar la variable edad evitamos el ciclo infinito.

```
var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")

```

## Clase 17 Objects

Un objeto es una estructura de datos que permite almacenar valores mediante **propiedad - valor** a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.
```
var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}
```

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

### atributos y métodos
En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.
```
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}
```
Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. La propiedad detalle es un método del objeto miAuto.

### acceder a los valores de un objeto
A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

Existen tres formas para acceder al valor de un objeto:

* Mediante la notación de corchetes
* Mediante la notación de punto

### notación de corchetes
La notación de corchetes ya ese familiar para ti, similar a los arrays, indicamos entre corchetes la propiedad del objeto entre comillas.
```
objeto["propiedad"]
```
Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.
```
miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()
```

Observa que cuando accedes a un método, únicamente muestra la función, esto sucede porque la propiedad guarda dicha función que aún no es ejecutada. Para ejecutarla hay que utilizar los paréntesis.

```
miAuto["detalle"]() // "Es un auto"
```

Finalmente, ten cuidado con las comillas, si nos las usas, estás haciendo referencia a una variable. En este caso existirán tres posibilidades:

Si existe la variable y su valor coincide con una propiedad del objeto, entonces mostrará su respectivo valor.
Si existe la variable, pero su valor no coincide con una propiedad del objeto, entonces mostrará undefined.
Si no existe la variable, entonces mostrará un error de referencia.
```
var propiedad1 = "marca"
miAuto[propiedad1] // "Toyota"

var propiedad2 = "nombre"
miAuto[propiedad2] // undefined

miAuto[modelo] // ReferenceError: modelo is not defined
```

### notación de punto

La notación de punto indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

```
objeto.propiedad
```

Por ejemplo, accedamos a las propiedades del objeto miAuto creado anteriormente.

```
miAuto.marca // "Toyota"
miAuto.modelo // "Corolla"
miAuto.añó // 2020
miAuto.detalle // ƒ detalle()
```

Igualmente, para ejecutar el método hay que utilizar los paréntesis.
```
miAuto.detalle() // "Es un auto"
```

Los arrays también son objetos
La notación punto te debe de parecer familiar, ya que así usábamos los diferentes atributos y métodos de los arrays, como length o map.

Esto es debido a que los arrays también son objetos en JavaScript. Por esta razón, también podemos utilizar la notación de corchetes, pero no es recomendable.
```
var array = [1, 2, 3]
array["length"] // 3
var newArray = array["map"](function (el) {
  return el * 2
})
newArray // [2,4,6]
```
### propiedades de un objeto
Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.

Por ejemplo, añadamos la propiedad color del objeto miAuto.
```
miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */
```
### modificar propiedades de un objeto
Para modificar propiedades de un objeto, utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.

Por ejemplo, modifiquemos la propiedad marca, de "Toyota" a "Ford", del objeto miAuto.
```

miAuto["marca"] = "Ford"
// o 
miAuto.marca = "Ford"

console.log(miAuto)
/* {
  marca: 'Ford', <--- Cambió de valor
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
} */
```

### eliminar propiedades de un objeto
Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

Por ejemplo, eliminemos la propiedad marca del objeto miAuto.

```
delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */
```

### El objeto contexto this
En JavaScript, el objeto contexto this hace referencia a diferentes valores según su contexto de ejecución. Como es un tema complejo de programación orientada a objetos, no profundizaré.

En objetos, el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.

```
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log(`Auto ${modelo} del ${año}.`)
    }
}
```

miAuto.detalle() //ReferenceError: modelo is not defined
Si ejecutamos la función miAuto.detalle() mostrará un error de referencia, que modelo no está definido.

Hagamos un pequeño cambio, utilicemos la notación de punto para acceder a los valores de la propiedad.

```
var miAuto = {
  //...
  detalle: function () {
    console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
  },
}
```


miAuto.detalle() // 'Auto Corolla del 2020.'
¡Funcionó! Sin embargo, necesito crear otro objeto con el mismo código.
```
var otroAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
    console.log(`Auto ${miAuto.modelo} del ${miAuto.año}.`)
  },
}
```
otroAuto.detalle() //ReferenceError: miAuto is not defined
Ahora muestra nuevamente un error de referencia del objeto miAuto. ¿Pero cambio miAuto por otroAuto y problema resuelto? Sí, pero como programador no debemos cambiar manualmente el código que puede ser reutilizado.

Realicemos otro cambio, utilicemos el objeto contexto this para hacer referencia a nuestro objeto.

```var miAuto = {
  //...
  detalle: function () {
    console.log(`Auto ${this.modelo} del ${this.año}.`)
  },
}

miAuto.detalle() //'Auto Corolla del 2020.'
¡Funcionó! Ahora creemos otro objeto.

var otroAuto = {
  // ...
  detalle: function () {
    console.log(`Auto ${this.modelo} del ${this.año}.`)
  },
}

otroAuto.detalle() //'Auto Corolla del 2020.'

```

¡Volvió a funcionar! Ahora podremos crear varios objetos sin cambiar una y otra vez la referencia al objeto this. En el objeto miAuto, this es igual a miAuto; mientras que en el objeto otroAuto, this es igual a otroAuto. Por eso podemos acceder a los atributos y métodos, independientemente del objeto creado.

Crear varios objetos a partir de un código base se denomina crear una instancia.

## Clase 18 Objects: Función constructora
Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

Cómo generar varios objetos a partir de una función constructora
Para crear una función constructora, debemos definir los parámetros correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.
```
function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}
```
Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.
```
var miAuto = new Auto("Toyota", "Corolla", 2020)
/* Auto {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ ()
}*/
```
De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.
```
var otroAuto = new Auto("Tesla", "Model 3", 2021)
var otroAuto2 = new Auto("Suzuki", "K-20", 2019)
var otroAuto3 = new Auto("Ferrari", "Model N", 2018)
```
Puede que observes la propiedad __proto__, no te preocupes, ya lo aprenderás.

## Clase 19 Métodos de recorridos de Arrays

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:
```
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
```

### utilizar el método filter
El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

El método filter recibe dos argumentos:

La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).

Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

var otherArray = array.filter(function(), thisArg)

La función, que recibe como argumento el método filter, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.

El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.

El array que está iterando.
const other = array.filter(function(element, index, array))
Practiquemos el uso del método filter
Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.

Entonces utilizamos el método filter que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
```
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
})

console.log(articulosFiltrados)
/* [
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Teclado', costo: 500 }
] */
```
### método map
El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

La función que itera y transforma cada elemento del array (obligatorio).

Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

var otherArray = array.map(function(), thisArg)

La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.

var otherArray = array.map(function(element, index, array))

Practiquemos el uso del método map
Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
```
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})
console.log(nombreArticulos)
/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/
```

## Clase 20 Recorriendo Arrays con .find(), .forEach() y .some()
Para continuar con otros métodos para recorrer arrays, aprenderás find, forEach y some.Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:
```
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
```
### método find
El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.find(function(), thisArg)
La función, que recibe como argumento, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.find(function(element, index, array))
Practiquemos el uso del método find
Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

Entonces utilizamos el método find que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
```
var algunArticulo = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
})
console.log(algunArticulo)
/* 
{ nombre: 'Laptop', costo: 3000 }
*/
```

### método forEach
El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

Este método recibe dos argumentos:

La función que itera cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.forEach(function(), thisArg)
La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.forEach(function(element, index, array))
Practiquemos el uso del método forEach
Utilicemos el array articulos que definimos para mostrar todos los artículos.

Entonces utilizamos el método forEach y que ejecute la función console.log para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
```
articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/
```
### método some
El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.some(function(), thisArg)
La función, que recibe como argumento el método some, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.some(function(element, index, array))
Practiquemos el uso del método some
Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

Entonces utilizamos el método some que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
```
var existeArticulo = articulos.some(function (articulo) {
  return articulo.costo <= 700
})
console.log(existeArticulo) // true
```

## Clase 21 Eliminando elementos de un Array
El método .push() nos permite agregar uno o más elementos al final de un array.

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

Bonus Track
Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Utilicemos el mismo ejemplo pero usando este método.


## Clase 22 

## Clase 23 

## Clase 24 

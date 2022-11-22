//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Alberth";

//2- Local:
function nombre(){
    var miApellido = "Apaza";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Alberth Apaza"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.
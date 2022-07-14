export class Helper {
  //1- Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
  multiplicar(a, b) {
    a / (1 / b);
  }
  //2- Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.
  function(array) {
    return Math.max.apply(Math, array);
  }

  //3-Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.

  cleanArray(arrayActual) {
    var newArray = new Array();
    for (var i = 0; i < arrayActual.length; i++) {
      if (arrayActual[i]) {
        newArray.push(arrayActual[i]);
      }
    }
    return newArray;
  }

  //6- Verificar si un string es un palíndromo.
  palindrome(str) {
    var a = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(a, "");
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  //7- Dado 3 numeros, devolver el mayor. Adaptar esto para que funcione con cualquier cantidad de numeros.
}
function highest_of_three(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(highest_of_three(-5, 4, 2));

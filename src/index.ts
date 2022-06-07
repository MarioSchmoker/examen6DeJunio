let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de celdas"));
let indice: number;
let arregloUsuario: number[] = new Array(dimensionArreglo);

function cargarArregloUsuario(
  arregloUsuario: number[],
  dimensionArreglo: number
) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    arregloUsuario[indice] = Math.floor(Math.random() * 100);
  }
  return arregloUsuario;
}
console.log(cargarArregloUsuario(arregloUsuario, dimensionArreglo));

function mostarArregloUsuario(
  arregloUsuario: number[],
  dimensionArreglo: number
) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log(
      " El numero del espacio ",
      [indice + 1],
      " es ",
      arregloUsuario[indice]
    );
  }
}
mostarArregloUsuario(arregloUsuario, dimensionArreglo);

function menorValorArreglo(arregloUsuario: number[], dimensionArreglo: number) {
  let menorValor: number = arregloUsuario[0];
  for (indice = 0; indice < dimensionArreglo; indice++) {
    if (arregloUsuario[indice] < menorValor) {
      menorValor = arregloUsuario[indice];
    }
  }
  console.log(" El menor valor del Arreglo es : ", menorValor);
}
menorValorArreglo(arregloUsuario, dimensionArreglo);

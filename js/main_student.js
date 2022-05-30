//Obteniendo los valores de los campos
function leeTexto() {


var nombre = document.getElementById('nombre').value;
var mensaje = document.getElementById('mensaje').value;

//Imprimir en consola
/*
console.log(nombre);
console.log(mensaje);
*/

//Para mostrar por alert
//  alert(nombre + ": " + mensaje);

//Mostramos información en etiqueta div
//innerHTML: Donde encuentre el ID respuesta inserto codigo html.
document.getElementById('respuesta').innerHTML= nombre + " tu mensaje " + mensaje + "<br>Ha sido enviado!";
  

if(nombre=="carlos") {
  alert("Hola master");
} else {
  alert("Hola novato :)")
}

}

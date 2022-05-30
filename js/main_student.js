//Obteniendo los valores de los campos
function leeTexto() {


var name = document.getElementById('name').value;
var lastName = document.getElementById('lastName').value;
var birthday = document.getElementById('birthday').value;
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
document.getElementById('respuesta').innerHTML= "Hola " + name + " " + lastName + " yo se mucho de ti, tu naciste en " + birthday +" y tu mensaje " + mensaje + "<br>Saludos!";
  

if(name=="Carlos") {
  alert("Hola Jefaso Maestro!! :D");
} else {
  alert("Tu no eres Carlos.... Hola Novato :)")
}

}

function validarRadio(){
  var s="no";
  for (var i=0; i<document.form1.genero.lenght; i++)
  {
    if(document.form1.genero[i].checked) {
      alert("marco: "+document.form1.genero[i].value);
      s="si";
    }
  }
  if (s=="no") {
    alert("Debe seleccionar un genero");
  }
}
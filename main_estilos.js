function changeColor(newColor) {
  var elem = document.getElementById('backgroundHeader');
  elem.style.backgroundColor = newColor;
}


/*calculador

borrar() {
  this.valorActual = this.valorActual.toString().slice(0,-1);
  this.imprimirValores();
}

borrarTodo() {
  this.valorActual = '';
  this.valorAnterior = '';
  this.tipoOperacion = '';
  this.imprimirValores();
}

computar(tipo) {
  this.tipoOperacion !== 'igual' && this.calcular();
  this.tipoOperacion = tipo;
  this.valorAnterior = this.valorActual || this.valorAnterior;
  this.valorActual = '';
  this.imprimirValores();
}

calcular() {
  const valorAnterior = parseFloat(this.valorAnterior);
  const valorActual = parseFloat(this.valorActual);

if (isNaN(valorActual) || isNaN(valorAnterior) ) return
this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
}
}






const displayValorActual = document.getElementById('valor-anterior');
const displayValorAnterior = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');



botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(valor))
});
*/
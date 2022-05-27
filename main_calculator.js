function suma (a,b) {
  var sum = a+b;
  document.getElementById('result').innerHTML = sum;
};
suma(5,5);


class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.tipoOperacion = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    this.signos = {

    }
  }

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

  agregarNumero(numero) {
    if(numero === '.' && this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
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

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(valor))
});
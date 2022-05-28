class Displays {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = ''; 
    this.valorAnterior = '';
  }

imprimirValores() {
  this.displayValorActual.textContent = this.valorActual;
  this.displayValorAnterior.textContent = this.valorAnterior;
}
 
agregarNumero(numero) {
  this.valorActual = numero; 
  this.imprimirValores();
}
}
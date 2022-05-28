class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this. calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
  }

  agregarNumero(numero) {
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
  }
}
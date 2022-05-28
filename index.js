const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const displays = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => displays.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(valor))
});

/*function suma (a,b) {
  var sum = a+b;
  document.getElementById('result').innerHTML = sum;
};
suma(5,5);
*/
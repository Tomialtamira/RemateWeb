let initialNumber = 3000; // Precio base.

function calculate() {
  let input = prompt("Ingresar oferta:"); // Prompt al usuario para ingresar una oferta.
  let offer = parseFloat(input); 

  if (!isNaN(offer)) {
    let result = initialNumber + offer; // Sumar el input al initialNumber.
    console.log("Resultado: " + result); //Mostrar el sesultado en un console.log.

    let increasedResult = result * 1.07; // Calcular un 7% mas del resultado.
    alert ("Ultima oferta: " + increasedResult); // Mostrar el resultado incrementado en un  .

    initialNumber = increasedResult; // Renovar intialNumber para la proxima iteracion.
    calculate(); // Llamar la funcion nuevamente.
  } else {
    alert("Ingreso invalido, por favor ingrese un numero valido.");
    calculate(); // Llamar a la funcion nuevamente para ingresar una nueva offer.
  }
}

calculate(); //Comenzar el calculo.
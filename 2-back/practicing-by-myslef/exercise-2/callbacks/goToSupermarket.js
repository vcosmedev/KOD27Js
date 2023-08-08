/* Acciones:

1. Ir al supermercado - 5000ms 
2. Pagar la despengas - 3000ms 
3. Llegar a casa - 4000 ms 

callback */

const goToSupermarket = (callback) => {
  console.log('Yendo al supermercado...');
  setTimeout(() => {
    // callback(null, 'Hola, ya llegué al supermercado ;D');
    callback('Hubo una manifestación D:', null);
  }, 5000);
};

goToSupermarket((error, message) => {
  if (error) {
    console.log('Ha ocurrido algo:', error);
    return error; // Retorna 'undefined'
    // Detener el error, termina la ejecución aquí -> Salidas tempranas o salidas condicionales
  }
  console.log(message);
  // if...else -> Es lo mismo, código más limpio
});

// el bloque de código anterior evalúa un truthy y falsy

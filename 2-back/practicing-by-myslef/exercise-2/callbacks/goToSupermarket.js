/* Acciones:

1. Ir al supermercado - 5000ms 
2. Pagar la despengas - 3000ms 
3. Llegar a casa - 4000 ms 

callback */

// Manejar eventos asíncronos con callbacks

const goToSupermarket = (callback) => {
  console.log('Yendo al supermercado...');
  setTimeout(() => {
    callback(null, 'Ya llegué al supermercado ;D');
    // callback('Hubo una manifestación D:', null);
  }, 1000);
  // Ya llegó al supermercado
};

const pay = (callback) => {
  console.log('Estoy haciendo fila para pagar...');
  setTimeout(() => {
    // callback(null, 'Finally, ya pagué la despensa :)))');
    callback('Se me olvidó el monedero :O', null);
  }, 3000);
};

const home = (callback) => {
  console.log('Yendo a casa...');
  setTimeout(() => {
    callback(null, 'Ya estoy en casa 🏡');
  }, 4000);
};

goToSupermarket((error, message) => {
  if (error) {
    console.log('Ha ocurrido algo:', error);
    return error; // Retorna 'undefined'
    // Detener el error, termina la ejecución aquí -> Salidas tempranas o salidas condicionales
  }
  console.log(message);
  // if...else -> Es lo mismo, código más limpio

  pay((error, message) => {
    if (error) {
      console.log('Error:', error);
      return error;
    }
    console.log(message);

    home((error, message) => {
      if (error) {
        console.log('Hubo un error', error);
      }
      console.log(message);
    });
  });
});

// Los bloques de código anterior '(error, message)' evalúa un truthy / falsy

// Anidar asincronismo en JS -> callback hell 👹

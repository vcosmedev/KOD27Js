// .map() -> transforma y retorna un arry
/* 
Creates a new array from calling a function for every array element.
Does not execute the function for empty elements.
Does not change the original array. 

Syntax: array.map(function(currentValue, index, arr), thisValue)

*/

// .filter() -> filtra y retorna un array
/* 
- Creates a new array filled with elements that pass a test provided by a function.
- Does not execute the function for empty elements.
- Does not change the original array.

Syntax: array.filter(function(currentValue, index, arr), thisValue)

*/

// .forEach() -> no retorna nada -> undefined
/* 
Calls a function for each element in an array.
Is not executed for empty elements. 

Syntax
array.forEach(function(currentValue, index, arr), thisValue)

*/

// .reduce() -> returns the accumulated result from the last call of the callback function
/* 
Executes a reducer function for array element.
Returns a single value: the function's accumulated result.
Does not execute the function for empty array elements.
Does not change the original array. 

Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/

// .pop() -> retorna una variable, el item removido (string, number, array o cualquier otro tipo en un array)
/* 

- Removes (pops) the LAST element of an array.
- Changes the original array.
- Returns the removed element.

Syntax: array.pop()

*/

// .push() -> retorna un número, la nueva longitud del array
/* 

- Adds new items to the END of an array.
- Changes the length of the array.
- Returns the new length.

Syntax: array.push(item1, item2, ..., itemX)

*/

// .shift() -> retorna una variable - El item removido: string, number, array o cualquier elemento permitido en un array
/* 

- Removes the FIRST item of an array.
- Changes the original array.
- Returns the shifted element.

Syntax: array.shift()

*/

// .unshift() -> retorna un número, la nueva longitud del array
/* 

- Adds new elements to the BEGINNING of an array.
- Overwrites the original array.

Syntax: array.unshift(item1, item2, ..., itemX)

*/
